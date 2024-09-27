<?php

namespace App;

interface IAssertionActionService
{
    public function getAssertionActionResponse($assertionConsumerServiceRequest, $claimsInfos, $requestedEmail);
}
