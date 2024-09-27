namespace Refactoring.Models;

public class AssertionActionResponse
{
    public string? Message { get; internal set; }
    public AssertionActionStatus Status { get; internal set; }
}