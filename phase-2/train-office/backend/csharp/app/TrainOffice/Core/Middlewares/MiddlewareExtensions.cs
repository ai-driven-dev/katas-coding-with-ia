namespace TrainOffice.Core.Middlewares;

public static class MiddlewareExtensions
{
    public static IApplicationBuilder UseCustomMiddlewares(this IApplicationBuilder app)
    {
        // Register the custom middleware
        app.UseMiddleware<ResponseWrapperMiddleware>();
        app.UseMiddleware<ExceptionHandlingMiddleware>();

        // Add other middleware registrations here if needed

        return app;
    }
}