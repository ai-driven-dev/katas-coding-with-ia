package com.example.refactoring;

public class AssertionActionResponse {
    private AssertionActionStatus status;
    private String message;

    // Getters and Setters
    public AssertionActionStatus getStatus() {
        return status;
    }

    public void setStatus(AssertionActionStatus status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}