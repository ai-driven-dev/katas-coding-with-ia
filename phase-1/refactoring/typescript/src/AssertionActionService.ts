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
        if (assertionConsumerServiceRequest.isClaimsRequired && !this.validateMandatoryClaims(claimsInfos, requestedEmail)) {
            return {
                status: AssertionActionStatus.Error,
                message: "The mandatory claims are not correctly configured in the identity provider"
            };
        }

        return {
            status: AssertionActionStatus.Success
        };
    }

    private validateMandatoryClaims(claimsInfos: ClaimsInfos, requestedEmail: string): boolean {
        let claimsIsValid = true;

        if (!claimsInfos.email) {
            this.logger.warn(`The claim email is not correctly configured in the identity provider for this user ${requestedEmail}`);
            claimsIsValid = false;
        }

        if (!claimsInfos.userName) {
            this.logger.warn(`The claim userName is not correctly configured in the identity provider for this user ${requestedEmail}`);
            claimsIsValid = false;
        }

        if (!claimsInfos.firstName) {
            this.logger.warn(`The claim firstName is not correctly configured in the identity provider for this user ${requestedEmail}`);
            claimsIsValid = false;
        }

        if (!claimsInfos.lastName) {
            this.logger.warn(`The claim lastName is not correctly configured in the identity provider for this user ${requestedEmail}`);
            claimsIsValid = false;
        }

        return claimsIsValid;
    }
}
