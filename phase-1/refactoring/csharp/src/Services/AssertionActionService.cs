using Refactoring.Models;

namespace Refactoring.Services;

public class AssertionActionService : IAssertionActionService
{
    private readonly ILogger<AssertionActionService> _logger;

    /// <summary>
    /// Initializes a new instance of the <see cref="AssertionActionService"/> class.
    /// </summary>
    /// <param name="logger">The logger.</param>
    public AssertionActionService(ILogger<AssertionActionService> logger)
    {
        _logger = logger;
    }

    /// <summary>
    /// Gets the assertion action response.This method is responsible for validating the mandatory claims.
    /// It get called when the assertion consumer service request is received during the SAML authentication process.
    /// </summary>
    /// <param name="assertionConsumerServiceRequest">The assertion consumer service request.</param>
    /// <param name="claimsInfos">The claims infos.</param>
    /// <param name="requestedEmail">The email used during SAML request.</param>
    /// <returns>The assertion action response.</returns>
    public AssertionActionResponse GetAssertionActionResponse(AssertionConsumerServiceRequest assertionConsumerServiceRequest, ClaimsInfos claimsInfos, string requestedEmail)
    {
        //TODO improve readability to get close to natural language change "!ValidateMandatoryClaims" into a new name easier to read.
        if (assertionConsumerServiceRequest.IsClaimsRequired && !ValidateMandatoryClaims(claimsInfos, requestedEmail))
        {
            return new AssertionActionResponse
            {
                Status = AssertionActionStatus.Error,
                Message = "The mandatory claims are not correctly configured in the identity provider"
            };
        }

        return new AssertionActionResponse
        {
            Status = AssertionActionStatus.Success
        };
    }

    /// <summary>
    /// check if the mandatory claims are not empty.
    /// Claims are considered mandatory when auto-create or auto-update user is enabled.
    /// </summary>
    /// <param name="claimsInfos">The claims infos.</param>
    /// <param name="requestedEmail">The email used during SAML request.</param>
    /// <returns><c>true</c> if the mandatory claims are not null or empty; otherwise, <c>false</c>.</returns>
    private bool ValidateMandatoryClaims(ClaimsInfos claimsInfos, string requestedEmail)
    {
        bool claimsIsValid = true;

        //TODO: Refactor this method to remove duplication
        if (string.IsNullOrEmpty(claimsInfos.Email))
        {
            _logger.LogWarning($"The claim {nameof(claimsInfos.Email)} is not correctly configured in the identity provider for this user {requestedEmail}");
            claimsIsValid = false;
        }

        if (string.IsNullOrEmpty(claimsInfos.UserName))
        {
            _logger.LogWarning($"The claim {nameof(claimsInfos.UserName)} is not correctly configured in the identity provider for this user {requestedEmail}");
            claimsIsValid = false;
        }

        if (string.IsNullOrEmpty(claimsInfos.FirstName))
        {
            _logger.LogWarning($"The claim {nameof(claimsInfos.FirstName)} is not correctly configured in the identity provider for this user {requestedEmail}");
            claimsIsValid = false;
        }

        if (string.IsNullOrEmpty(claimsInfos.LastName))
        {
            _logger.LogWarning($"The claim {nameof(claimsInfos.LastName)} is not correctly configured in the identity provider for this user {requestedEmail}");
            claimsIsValid = false;
        }

        return claimsIsValid;
    }
}