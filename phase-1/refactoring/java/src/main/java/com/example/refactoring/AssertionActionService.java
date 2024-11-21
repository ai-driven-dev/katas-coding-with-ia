package com.example.refactoring;

import java.util.logging.Logger;

public class AssertionActionService {
    private static final Logger logger = Logger.getLogger(AssertionActionService.class.getName());

    public AssertionActionResponse getAssertionActionResponse(AssertionConsumerServiceRequest request,
            ClaimsInfos claimsInfos, String requestedEmail) {
        if (request.isClaimsRequired() && !validateMandatoryClaims(claimsInfos, requestedEmail)) {
            AssertionActionResponse response = new AssertionActionResponse();
            response.setStatus(AssertionActionStatus.ERROR);
            response.setMessage("The mandatory claims are not correctly configured in the identity provider");

            return response;
        }

        AssertionActionResponse response = new AssertionActionResponse();
        response.setStatus(AssertionActionStatus.SUCCESS);
        return response;
    }

    private boolean validateMandatoryClaims(ClaimsInfos claimsInfos, String requestedEmail) {
        boolean claimsIsValid = true;

        if (claimsInfos.getEmail() == null || claimsInfos.getEmail().isEmpty()) {
            logger.warning("The claim Email is not correctly configured in the identity provider for this user "
                    + requestedEmail);
            claimsIsValid = false;
        }

        if (claimsInfos.getUserName() == null || claimsInfos.getUserName().isEmpty()) {
            logger.warning("The claim UserName is not correctly configured in the identity provider for this user "
                    + requestedEmail);
            claimsIsValid = false;
        }

        if (claimsInfos.getFirstName() == null || claimsInfos.getFirstName().isEmpty()) {
            logger.warning("The claim FirstName is not correctly configured in the identity provider for this user "
                    + requestedEmail);
            claimsIsValid = false;
        }

        if (claimsInfos.getLastName() == null || claimsInfos.getLastName().isEmpty()) {
            logger.warning("The claim LastName is not correctly configured in the identity provider for this user "
                    + requestedEmail);
            claimsIsValid = false;
        }

        return claimsIsValid;
    }
}