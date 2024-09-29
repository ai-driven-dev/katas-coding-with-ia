using System.Text.Json.Serialization;

namespace TrainOffice.Core.Api;

public class ApiResponse<T>
{
    public T? Data { get; set; }
    public List<ApiError>? Errors { get; set; }
    public Meta? Meta { get; set; }

    public ApiResponse(T data)
    {
        Data = data;
        Errors = null;
        Meta = null;
    }

    public ApiResponse(List<ApiError> errors)
    {
        Data = default;
        Errors = errors;
        Meta = null;
    }

    public ApiResponse(T data, Meta meta)
    {
        Data = data;
        Errors = null;
        Meta = meta;
    }

    public ApiResponse(T data, List<ApiError> errors)
    {
        Data = data;
        Errors = errors;
        Meta = null;
    }

    [JsonConstructor]
    public ApiResponse(T data, List<ApiError> errors, Meta meta)
    {
        Data = data;
        Errors = errors;
        Meta = meta;
    }
}

public class ApiError(string code, string message)
{
    public string? Code { get; set; } = code;
    public string? Message { get; set; } = message;
}

public class Meta(int? page, int? pageSize, int? totalPages, int? totalItems, string? customMetadata = null)
{
    public int? Page { get; set; } = page;
    public int? PageSize { get; set; } = pageSize;
    public int? TotalPages { get; set; } = totalPages;
    public int? TotalItems { get; set; } = totalItems;
    public string? CustomMetadata { get; set; } = customMetadata;
}

public class ErrorResponse;