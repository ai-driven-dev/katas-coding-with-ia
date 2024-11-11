package com.example.refactoring;

public class AssertionConsumerServiceRequest {
    private boolean isClaimsRequired;

    public boolean isClaimsRequired() {
        return isClaimsRequired;
    }

    public void setClaimsRequired(boolean isClaimsRequired) {
        this.isClaimsRequired = isClaimsRequired;
    }
}