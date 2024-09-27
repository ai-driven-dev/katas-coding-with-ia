using Refactoring.Models;
using Refactoring.Services;

namespace Refactoring;

public class Program
{
    public static void Main(string[] args)
    {
        // Create a new instance of WebApplicationBuilder. It is used to configure the app.
        var builder = WebApplication.CreateBuilder(args);

        // Add logging services to the container.
        // The container is a collection of services that are available to the app.
        builder.Services.AddLogging();

        // Add the AssertionActionService to the container.
        //lifetimes Transient : A new instance every time is it called. Use for lightweight, stateless services.
        builder.Services.AddTransient<IAssertionActionService, AssertionActionService>();

        //For your information lifetimes scoped and singleton are also available.
        //Lifetimes Scoped : A new instance is created once per client request (connection).
        //Lifetimes Singleton : A single instance is created for the application.

        // Build the app.
        var app = builder.Build();

        // Add a route to the app.
        // The route listens for GET requests to the URL /AssertionActionService with the parameters isClaimsRequired and userName.
        // when launching with https profile, the URL will be for example https://localhost:7258/AssertionActionService?isClaimsRequired=true&userName=test
        app.MapGet("/AssertionActionService", (IAssertionActionService assertionActionService, bool isClaimsRequired, string userName) =>
        {
            var request = new AssertionConsumerServiceRequest { IsClaimsRequired = isClaimsRequired };
            var claimsInfos = new ClaimsInfos
            {
                Email = "test.fr",
                UserName = userName, // Use the userName parameter passed in the query
                FirstName = "test",
                LastName = "test"
            };

            var response = assertionActionService.GetAssertionActionResponse(request, claimsInfos, "test.fr");

            return response;
        });

        // Run the app.
        app.Run();
    }
}