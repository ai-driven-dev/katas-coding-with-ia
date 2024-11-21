using Microsoft.Extensions.Logging.Abstractions;
using Refactoring.Models;
using Refactoring.Services;

namespace RefactoringTests.Services;

//TODO add missing tests. Use theories if needed.
public class AssertionActionServiceTests
{
    private readonly AssertionActionService _service;

    public AssertionActionServiceTests()
    {
        _service = new AssertionActionService(NullLogger<AssertionActionService>.Instance);
    }

    [Fact]
    public void Instanciate_AssertionActionService()
    {
        _ = new AssertionActionService(NullLogger<AssertionActionService>.Instance);
    }

    [Fact]
    public void ValidAssertion_WithClaimsRequired()
    {
        var service = new AssertionActionService(NullLogger<AssertionActionService>.Instance);
        var request = new AssertionConsumerServiceRequest { IsClaimsRequired = true };
        var claimsInfos = new ClaimsInfos
        {
            Email = "test@test.fr",
            UserName = "test",
            FirstName = "test",
            LastName = "test"
        };

        var response = service.GetAssertionActionResponse(request, claimsInfos, "test@test.fr");

        Assert.Equal(AssertionActionStatus.Success, response.Status);
    }

    [Fact]
    public void InvalidAssertion_WithClaimsRequired()
    {
        var service = new AssertionActionService(NullLogger<AssertionActionService>.Instance);
        var request = new AssertionConsumerServiceRequest { IsClaimsRequired = true };
        var claimsInfos = new ClaimsInfos
        {
            Email = "",
            UserName = "",
            FirstName = "",
            LastName = ""
        };

        var response = service.GetAssertionActionResponse(request, claimsInfos, "test@test.fr");

        Assert.Equal(AssertionActionStatus.Error, response.Status);
    }

    [Fact]
    public void ValidAssertion_WithClaimsInfos_Empty_But_ClaimsNotRequired()
    {
        var service = new AssertionActionService(NullLogger<AssertionActionService>.Instance);
        var request = new AssertionConsumerServiceRequest { IsClaimsRequired = false };
        var claimsInfos = new ClaimsInfos
        {
            Email = "",
            UserName = "",
            FirstName = "",
            LastName = ""
        };

        var response = service.GetAssertionActionResponse(request, claimsInfos, "test@test.fr");

        Assert.Equal(AssertionActionStatus.Success, response.Status);
    }

    [Theory]
    [InlineData("", "username", "firstname", "lastname")]
    [InlineData("email@test.com", "", "firstname", "lastname")]
    [InlineData("email@test.com", "username", "", "lastname")]
    [InlineData("email@test.com", "username", "firstname", "")]
    public void InvalidAssertion_WithSpecificClaimMissing(string email, string username, string firstname, string lastname)
    {
        var request = new AssertionConsumerServiceRequest { IsClaimsRequired = true };
        var claimsInfos = new ClaimsInfos
        {
            Email = email,
            UserName = username,
            FirstName = firstname,
            LastName = lastname
        };

        var response = _service.GetAssertionActionResponse(request, claimsInfos, "test@test.com");

        Assert.Equal(AssertionActionStatus.Error, response.Status);
    }
}