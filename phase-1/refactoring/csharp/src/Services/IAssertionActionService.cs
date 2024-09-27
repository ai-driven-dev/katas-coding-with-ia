using Refactoring.Models;

namespace Refactoring.Services;

public interface IAssertionActionService
{
    AssertionActionResponse GetAssertionActionResponse(AssertionConsumerServiceRequest assertionConsumerServiceRequest, ClaimsInfos claimsInfos, string requestedEmail);
}