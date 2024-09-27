import { AssertionConsumerServiceRequest, ClaimsInfos, AssertionActionResponse } from './AssertionActionService';

export interface IAssertionActionService {
    getAssertionActionResponse(assertionConsumerServiceRequest: AssertionConsumerServiceRequest, claimsInfos: ClaimsInfos, requestedEmail: string): AssertionActionResponse;
}
