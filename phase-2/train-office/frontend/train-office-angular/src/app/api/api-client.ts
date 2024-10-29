//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.1.0.0 (NJsonSchema v11.0.2.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export module ApiModule {
export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class Client {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ?? "http://localhost:7000";
    }

    weatherForecast_GetWeatherForecast(): Observable<ApiResponseOfIEnumerableOfWeatherForecast> {
        let url_ = this.baseUrl + "/api/WeatherForecast";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processWeatherForecast_GetWeatherForecast(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processWeatherForecast_GetWeatherForecast(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<ApiResponseOfIEnumerableOfWeatherForecast>;
                }
            } else
                return _observableThrow(response_) as any as Observable<ApiResponseOfIEnumerableOfWeatherForecast>;
        }));
    }

    protected processWeatherForecast_GetWeatherForecast(response: HttpResponseBase): Observable<ApiResponseOfIEnumerableOfWeatherForecast> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ApiResponseOfIEnumerableOfWeatherForecast.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result500: any = null;
            let resultData500 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result500 = ApiResponseOfErrorResponse.fromJS(resultData500);
            return throwException("A server side error occurred.", status, _responseText, _headers, result500);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ApiResponseOfIEnumerableOfWeatherForecast>(null as any);
    }

    trains_GetTrains(): Observable<ApiResponseOfIEnumerableOfGetTrainsDto> {
        let url_ = this.baseUrl + "/api/Trains";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processTrains_GetTrains(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processTrains_GetTrains(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<ApiResponseOfIEnumerableOfGetTrainsDto>;
                }
            } else
                return _observableThrow(response_) as any as Observable<ApiResponseOfIEnumerableOfGetTrainsDto>;
        }));
    }

    protected processTrains_GetTrains(response: HttpResponseBase): Observable<ApiResponseOfIEnumerableOfGetTrainsDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ApiResponseOfIEnumerableOfGetTrainsDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result500: any = null;
            let resultData500 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result500 = ApiResponseOfErrorResponse.fromJS(resultData500);
            return throwException("A server side error occurred.", status, _responseText, _headers, result500);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ApiResponseOfIEnumerableOfGetTrainsDto>(null as any);
    }
}

export class ApiResponseOfIEnumerableOfWeatherForecast implements IApiResponseOfIEnumerableOfWeatherForecast {
    data?: WeatherForecast[] | undefined;
    errors?: ApiError[] | undefined;
    meta?: Meta | undefined;

    constructor(data?: IApiResponseOfIEnumerableOfWeatherForecast) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["Data"])) {
                this.data = [] as any;
                for (let item of _data["Data"])
                    this.data!.push(WeatherForecast.fromJS(item));
            }
            if (Array.isArray(_data["Errors"])) {
                this.errors = [] as any;
                for (let item of _data["Errors"])
                    this.errors!.push(ApiError.fromJS(item));
            }
            this.meta = _data["Meta"] ? Meta.fromJS(_data["Meta"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ApiResponseOfIEnumerableOfWeatherForecast {
        data = typeof data === 'object' ? data : {};
        let result = new ApiResponseOfIEnumerableOfWeatherForecast();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.data)) {
            data["Data"] = [];
            for (let item of this.data)
                data["Data"].push(item.toJSON());
        }
        if (Array.isArray(this.errors)) {
            data["Errors"] = [];
            for (let item of this.errors)
                data["Errors"].push(item.toJSON());
        }
        data["Meta"] = this.meta ? this.meta.toJSON() : <any>undefined;
        return data;
    }
}

export interface IApiResponseOfIEnumerableOfWeatherForecast {
    data?: WeatherForecast[] | undefined;
    errors?: ApiError[] | undefined;
    meta?: Meta | undefined;
}

export class WeatherForecast implements IWeatherForecast {
    date?: Date;
    temperatureC?: number;
    summary?: string | undefined;
    temperatureF?: number;

    constructor(data?: IWeatherForecast) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.date = _data["date"] ? new Date(_data["date"].toString()) : <any>undefined;
            this.temperatureC = _data["temperatureC"];
            this.summary = _data["summary"];
            this.temperatureF = _data["temperatureF"];
        }
    }

    static fromJS(data: any): WeatherForecast {
        data = typeof data === 'object' ? data : {};
        let result = new WeatherForecast();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["date"] = this.date ? formatDate(this.date) : <any>undefined;
        data["temperatureC"] = this.temperatureC;
        data["summary"] = this.summary;
        data["temperatureF"] = this.temperatureF;
        return data;
    }
}

export interface IWeatherForecast {
    date?: Date;
    temperatureC?: number;
    summary?: string | undefined;
    temperatureF?: number;
}

export class ApiError implements IApiError {
    code?: string | undefined;
    message?: string | undefined;

    constructor(data?: IApiError) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.code = _data["code"];
            this.message = _data["message"];
        }
    }

    static fromJS(data: any): ApiError {
        data = typeof data === 'object' ? data : {};
        let result = new ApiError();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["code"] = this.code;
        data["message"] = this.message;
        return data;
    }
}

export interface IApiError {
    code?: string | undefined;
    message?: string | undefined;
}

export class Meta implements IMeta {
    page?: number | undefined;
    pageSize?: number | undefined;
    totalPages?: number | undefined;
    totalItems?: number | undefined;
    customMetadata?: string | undefined;

    constructor(data?: IMeta) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.page = _data["page"];
            this.pageSize = _data["pageSize"];
            this.totalPages = _data["totalPages"];
            this.totalItems = _data["totalItems"];
            this.customMetadata = _data["customMetadata"];
        }
    }

    static fromJS(data: any): Meta {
        data = typeof data === 'object' ? data : {};
        let result = new Meta();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["page"] = this.page;
        data["pageSize"] = this.pageSize;
        data["totalPages"] = this.totalPages;
        data["totalItems"] = this.totalItems;
        data["customMetadata"] = this.customMetadata;
        return data;
    }
}

export interface IMeta {
    page?: number | undefined;
    pageSize?: number | undefined;
    totalPages?: number | undefined;
    totalItems?: number | undefined;
    customMetadata?: string | undefined;
}

export class ApiResponseOfErrorResponse implements IApiResponseOfErrorResponse {
    data?: ErrorResponse | undefined;
    errors?: ApiError[] | undefined;
    meta?: Meta | undefined;

    constructor(data?: IApiResponseOfErrorResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.data = _data["Data"] ? ErrorResponse.fromJS(_data["Data"]) : <any>undefined;
            if (Array.isArray(_data["Errors"])) {
                this.errors = [] as any;
                for (let item of _data["Errors"])
                    this.errors!.push(ApiError.fromJS(item));
            }
            this.meta = _data["Meta"] ? Meta.fromJS(_data["Meta"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ApiResponseOfErrorResponse {
        data = typeof data === 'object' ? data : {};
        let result = new ApiResponseOfErrorResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Data"] = this.data ? this.data.toJSON() : <any>undefined;
        if (Array.isArray(this.errors)) {
            data["Errors"] = [];
            for (let item of this.errors)
                data["Errors"].push(item.toJSON());
        }
        data["Meta"] = this.meta ? this.meta.toJSON() : <any>undefined;
        return data;
    }
}

export interface IApiResponseOfErrorResponse {
    data?: ErrorResponse | undefined;
    errors?: ApiError[] | undefined;
    meta?: Meta | undefined;
}

export class ErrorResponse implements IErrorResponse {

    constructor(data?: IErrorResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
    }

    static fromJS(data: any): ErrorResponse {
        data = typeof data === 'object' ? data : {};
        let result = new ErrorResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        return data;
    }
}

export interface IErrorResponse {
}

export class ApiResponseOfIEnumerableOfGetTrainsDto implements IApiResponseOfIEnumerableOfGetTrainsDto {
    data?: GetTrainsDto[] | undefined;
    errors?: ApiError[] | undefined;
    meta?: Meta | undefined;

    constructor(data?: IApiResponseOfIEnumerableOfGetTrainsDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["Data"])) {
                this.data = [] as any;
                for (let item of _data["Data"])
                    this.data!.push(GetTrainsDto.fromJS(item));
            }
            if (Array.isArray(_data["Errors"])) {
                this.errors = [] as any;
                for (let item of _data["Errors"])
                    this.errors!.push(ApiError.fromJS(item));
            }
            this.meta = _data["Meta"] ? Meta.fromJS(_data["Meta"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ApiResponseOfIEnumerableOfGetTrainsDto {
        data = typeof data === 'object' ? data : {};
        let result = new ApiResponseOfIEnumerableOfGetTrainsDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.data)) {
            data["Data"] = [];
            for (let item of this.data)
                data["Data"].push(item.toJSON());
        }
        if (Array.isArray(this.errors)) {
            data["Errors"] = [];
            for (let item of this.errors)
                data["Errors"].push(item.toJSON());
        }
        data["Meta"] = this.meta ? this.meta.toJSON() : <any>undefined;
        return data;
    }
}

export interface IApiResponseOfIEnumerableOfGetTrainsDto {
    data?: GetTrainsDto[] | undefined;
    errors?: ApiError[] | undefined;
    meta?: Meta | undefined;
}

export class GetTrainsDto implements IGetTrainsDto {
    id?: number;
    name?: string;
    departureStation?: string;
    arrivalStation?: string;
    departureTime?: Date;
    arrivalTime?: Date;
    coaches?: CoachDto[];

    constructor(data?: IGetTrainsDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.departureStation = _data["departureStation"];
            this.arrivalStation = _data["arrivalStation"];
            this.departureTime = _data["departureTime"] ? new Date(_data["departureTime"].toString()) : <any>undefined;
            this.arrivalTime = _data["arrivalTime"] ? new Date(_data["arrivalTime"].toString()) : <any>undefined;
            if (Array.isArray(_data["coaches"])) {
                this.coaches = [] as any;
                for (let item of _data["coaches"])
                    this.coaches!.push(CoachDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GetTrainsDto {
        data = typeof data === 'object' ? data : {};
        let result = new GetTrainsDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["departureStation"] = this.departureStation;
        data["arrivalStation"] = this.arrivalStation;
        data["departureTime"] = this.departureTime ? this.departureTime.toISOString() : <any>undefined;
        data["arrivalTime"] = this.arrivalTime ? this.arrivalTime.toISOString() : <any>undefined;
        if (Array.isArray(this.coaches)) {
            data["coaches"] = [];
            for (let item of this.coaches)
                data["coaches"].push(item.toJSON());
        }
        return data;
    }
}

export interface IGetTrainsDto {
    id?: number;
    name?: string;
    departureStation?: string;
    arrivalStation?: string;
    departureTime?: Date;
    arrivalTime?: Date;
    coaches?: CoachDto[];
}

export class CoachDto implements ICoachDto {
    id?: number;
    name?: string;
    type?: CoachType;
    seats?: SeatDto[];

    constructor(data?: ICoachDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.type = _data["type"];
            if (Array.isArray(_data["seats"])) {
                this.seats = [] as any;
                for (let item of _data["seats"])
                    this.seats!.push(SeatDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): CoachDto {
        data = typeof data === 'object' ? data : {};
        let result = new CoachDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["type"] = this.type;
        if (Array.isArray(this.seats)) {
            data["seats"] = [];
            for (let item of this.seats)
                data["seats"].push(item.toJSON());
        }
        return data;
    }
}

export interface ICoachDto {
    id?: number;
    name?: string;
    type?: CoachType;
    seats?: SeatDto[];
}

export enum CoachType {
    FirstClass = 0,
    SecondClass = 1,
    DiningCar = 2,
}

export class SeatDto implements ISeatDto {
    id?: number;
    seatNumber?: string;
    isOccupied?: boolean;

    constructor(data?: ISeatDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.seatNumber = _data["seatNumber"];
            this.isOccupied = _data["isOccupied"];
        }
    }

    static fromJS(data: any): SeatDto {
        data = typeof data === 'object' ? data : {};
        let result = new SeatDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["seatNumber"] = this.seatNumber;
        data["isOccupied"] = this.isOccupied;
        return data;
    }
}

export interface ISeatDto {
    id?: number;
    seatNumber?: string;
    isOccupied?: boolean;
}

function formatDate(d: Date) {
    return d.getFullYear() + '-' + 
        (d.getMonth() < 9 ? ('0' + (d.getMonth()+1)) : (d.getMonth()+1)) + '-' +
        (d.getDate() < 10 ? ('0' + d.getDate()) : d.getDate());
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}

}