using System.Text.Json;
using TrainOffice.Core.Api;

namespace TrainOffice.Core.Middlewares;

public class ResponseWrapperMiddleware(RequestDelegate next)
{
    public async Task InvokeAsync(HttpContext context)
    {
        // Skip if the request is not an API request
        if (!context.Request.Path.StartsWithSegments("/api"))
        {
            await next(context);
            return;
        }

        var originalBodyStream = context.Response.Body;

        using var responseBody = new MemoryStream();
        context.Response.Body = responseBody;

        await next(context);

        context.Response.Body = originalBodyStream;

        var response = await FormatResponse(responseBody, context.Response.StatusCode);
        await context.Response.WriteAsync(response);
    }

    private static async Task<string> FormatResponse(MemoryStream responseBody, int statusCode)
    {
        responseBody.Seek(0, SeekOrigin.Begin);
        var bodyAsText = await new StreamReader(responseBody).ReadToEndAsync();

        object apiResponse;

        if (statusCode == StatusCodes.Status200OK)
        {
            var data = JsonSerializer.Deserialize<object>(bodyAsText) ?? throw new ArgumentNullException($"Can't Deserialize {bodyAsText}");
            apiResponse = new ApiResponse<object>(data);
        }
        else if (statusCode == StatusCodes.Status404NotFound)
        {
            apiResponse = new ApiResponse<object>(
            [
                new("NotFound", "Resource not found.")
            ]);
        }
        else if (statusCode == StatusCodes.Status500InternalServerError)
        {
            apiResponse = new ApiResponse<object>(
            [
                new("ServerError", "An unexpected error occurred.")
            ]);
        }
        else
        {
            apiResponse = JsonSerializer.Deserialize<object>(bodyAsText) ?? throw new ArgumentNullException($"Can't Deserialize {bodyAsText}");
        }

        return JsonSerializer.Serialize(apiResponse);
    }
}