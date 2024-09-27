<?php

namespace Tests\Unit;

use App\AssertionActionService;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use PHPUnit\Framework\TestCase;

class AssertionActionServiceTest extends TestCase
{
    private $assertionActionService;

    protected function setUp(): void
    {
        $logger = $this->createMock(Logger::class);
        $this->assertionActionService = new AssertionActionService($logger);
    }

    public function testGetAssertionActionResponseWithValidClaims()
    {
        $assertionConsumerServiceRequest = (object) ['isClaimsRequired' => true];
        $claimsInfos = (object) [
            'email' => 'user@example.com',
            'userName' => 'username',
            'firstName' => 'John',
            'lastName' => 'Doe'
        ];
        $requestedEmail = 'user@example.com';

        $response = $this->assertionActionService->getAssertionActionResponse($assertionConsumerServiceRequest, $claimsInfos, $requestedEmail);

        $this->assertEquals('Success', $response['status']);
    }

    public function testGetAssertionActionResponseWithMissingClaims()
    {
        $assertionConsumerServiceRequest = (object) ['isClaimsRequired' => true];
        $claimsInfos = (object) [
            'email' => '',
            'userName' => '',
            'firstName' => '',
            'lastName' => ''
        ];
        $requestedEmail = 'user@example.com';

        $response = $this->assertionActionService->getAssertionActionResponse($assertionConsumerServiceRequest, $claimsInfos, $requestedEmail);

        $this->assertEquals('Error', $response['status']);
        $this->assertEquals('The mandatory claims are not correctly configured in the identity provider', $response['message']);
    }

    public function testGetAssertionActionResponseWithClaimsNotRequired()
    {
        $assertionConsumerServiceRequest = (object) ['isClaimsRequired' => false];
        $claimsInfos = (object) [
            'email' => '',
            'userName' => '',
            'firstName' => '',
            'lastName' => ''
        ];
        $requestedEmail = 'user@example.com';

        $response = $this->assertionActionService->getAssertionActionResponse($assertionConsumerServiceRequest, $claimsInfos, $requestedEmail);

        $this->assertEquals('Success', $response['status']);
    }
}
