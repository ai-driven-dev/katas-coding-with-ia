import { createLogger, format, transports } from 'winston';
import { IAssertionActionService } from './IAssertionActionService';
export interface AssertionConsumerServiceRequest {
    isClaimsRequired: boolean;
}

export interface ClaimsInfos {
    email?: string | null;
    userName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
}

enum AssertionActionStatus {
    Success = "Success",
    Error = "Error"
}

export interface AssertionActionResponse {
    status: AssertionActionStatus;
    message?: string;
}

enum ClaimValidationStatus {
    OK = "OK",
    EMPTY = "EMPTY",
    NULL = "NULL",
    UNDEFINED = "UNDEFINED"
}

interface ClaimValidationResult {
    field: string;
    status: ClaimValidationStatus;
}

export class AssertionActionService implements IAssertionActionService {
    private logger: any;

    constructor(logger?: any) {
        this.logger = logger || createLogger({
            level: 'warn',
            format: format.combine(format.timestamp(), format.json()),
            transports: [
                new transports.File({ filename: 'error.log', level: 'warn' })
            ]
        });
    }

    public getAssertionActionResponse(assertionConsumerServiceRequest: AssertionConsumerServiceRequest, claimsInfos: ClaimsInfos, requestedEmail: string): AssertionActionResponse {
        if (assertionConsumerServiceRequest.isClaimsRequired) {
            const validationResults = this.validateMandatoryClaims(claimsInfos, requestedEmail);
            const invalidClaims = validationResults.filter(result => result.status !== ClaimValidationStatus.OK);

            if (invalidClaims.length > 0) {
                const errorDetails = invalidClaims
                    .map(claim => `${claim.field} (${claim.status})`)
                    .join(', ');

                return {
                    status: AssertionActionStatus.Error,
                    message: `The following mandatory claims are not correctly configured in the identity provider: ${errorDetails}`
                };
            }
        }

        return {
            status: AssertionActionStatus.Success
        };
    }


    private validateMandatoryClaims(claimsInfos: ClaimsInfos, requestedEmail: string): ClaimValidationResult[] {
        const requiredClaims = ['email', 'userName', 'firstName', 'lastName'];
        const results: ClaimValidationResult[] = [];

        for (const claim of requiredClaims) {
            const value = claimsInfos[claim as keyof ClaimsInfos];
            let status: ClaimValidationStatus;

            if (value === undefined) {
                status = ClaimValidationStatus.UNDEFINED;
            } else if (value === null) {
                status = ClaimValidationStatus.NULL;
            } else if (value === '') {
                status = ClaimValidationStatus.EMPTY;
            } else {
                status = ClaimValidationStatus.OK;
            }

            if (status !== ClaimValidationStatus.OK) {
                this.logger.warn(`The claim ${claim} is not correctly configured in the identity provider for this user ${requestedEmail}`);
            }

            results.push({ field: claim, status });
        }

        return results;
    }
}
