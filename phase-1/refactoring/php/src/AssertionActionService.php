<?php

namespace App;

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

class AssertionActionService implements IAssertionActionService
{
    private $logger;

    public function __construct()
    {
        $this->logger = new Logger('assertionLogger');
        $this->logger->pushHandler(new StreamHandler('path/to/your/logs.log', Logger::WARNING));
    }

    public function getAssertionActionResponse($assertionConsumerServiceRequest, $claimsInfos, $requestedEmail)
    {
        if ($assertionConsumerServiceRequest->isClaimsRequired && !$this->validateMandatoryClaims($claimsInfos, $requestedEmail)) {
            return [
                'status' => 'Error',
                'message' => 'The mandatory claims are not correctly configured in the identity provider'
            ];
        }

        return [
            'status' => 'Success'
        ];
    }

    private function validateMandatoryClaims($claimsInfos, $requestedEmail)
    {
        $claimsIsValid = true;

        if (empty($claimsInfos->email)) {
            $this->logger->warning("The claim Email is not correctly configured in the identity provider for this user {$requestedEmail}");
            $claimsIsValid = false;
        }

        if (empty($claimsInfos->userName)) {
            $this->logger->warning("The claim UserName is not correctly configured in the identity provider for this user {$requestedEmail}");
            $claimsIsValid = false;
        }

        if (empty($claimsInfos->firstName)) {
            $this->logger->warning("The claim FirstName is not correctly configured in the identity provider for this user {$requestedEmail}");
            $claimsIsValid = false;
        }

        if (empty($claimsInfos->lastName)) {
            $this->logger->warning("The claim LastName is not correctly configured in the identity provider for this user {$requestedEmail}");
            $claimsIsValid = false;
        }

        return $claimsIsValid;
    }
}
