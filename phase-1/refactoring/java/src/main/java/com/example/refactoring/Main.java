package com.example.refactoring;

public class Main {
    public static void main(String[] args) {
        AssertionActionService service = new AssertionActionService();
        AssertionConsumerServiceRequest request = new AssertionConsumerServiceRequest();
        request.setClaimsRequired(true);

        ClaimsInfos claimsInfos = new ClaimsInfos();
        claimsInfos.setEmail("test@test.fr");
        claimsInfos.setUserName("test");
        claimsInfos.setFirstName("test");
        claimsInfos.setLastName("test");

        AssertionActionResponse response = service.getAssertionActionResponse(request, claimsInfos, "test@test.fr");
        System.out.println("Response Status: " + response.getStatus());
    }
}