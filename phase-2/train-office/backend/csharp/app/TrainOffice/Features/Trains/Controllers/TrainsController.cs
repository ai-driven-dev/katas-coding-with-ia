﻿using Microsoft.AspNetCore.Mvc;
using TrainOffice.Core.Api;
using TrainOffice.Features.Trains.UseCases;

namespace TrainOffice.Features.Trains.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TrainsController : ControllerBase
{
    private readonly IGetTrainsQuery GetTrainsQuery;

    public TrainsController(IGetTrainsQuery getTrains)
    {
        GetTrainsQuery = getTrains;
    }

    [HttpGet(Name = "GetTrains")]
    [ProducesResponseType(typeof(ApiResponse<IEnumerable<GetTrainsDto>>), 200)]
    [ProducesResponseType(typeof(ApiResponse<ErrorResponse>), 500)]
    public async Task<ActionResult<List<GetTrainsDto>>> GetTrains()
    {
        var trains = await GetTrainsQuery.Execute();

        return trains;
    }
}
