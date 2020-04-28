import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export enum ResponseContentEnum {
  Text = 'text',
  Json = 'json',
  ArrayBuffer = 'arraybuffer',
  Blob = 'blob',
}

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'POST',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
  HEAD = 'HEAD',
  PATCH = 'PATCH',
}

export enum ResponseBodyStatus {
  OK = 'OK',
  FAIL = 'FAIL',
  UNKNOWN = 'UNKNOWN',
  WARNING = 'WARNING',
  INFO = 'INFO',
}

/**
 * The HTTP options to send with the request.
 */
export interface RequestOption {
  /**
   * `HttpHeaders` class represents the header configuration options for an HTTP request.
   * Instances should be assumed immutable with lazy parsing.
   */
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  /**
   * Whether this request should be made in a way that exposes progress events.
   * Progress events are expensive (change detection runs on each event) and so they should
   * only be requested if the consumer intends to monitor them.
   */
  reportProgress?: boolean;
  /**
   * `HttpClient` is available as an injectable class, with methods to perform HTTP requests.
   * Each request method has multiple signatures, and the return type varies based on
   * the signature that is called (mainly the values of `observe` and `responseType`).
   * It accepts body | events | response. With this option An `Observable` of the `HTTPResponse` | `HTTPEvent`
   */
  observe?: any;
  /**
   * Outgoing URL parameters.
   */
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  /**
   * The expected response type of the server.
   * This is used to parse the response appropriately before returning it to the requestee.
   * responseType: 'arraybuffer' | 'blob' | 'json' | 'text'
   */
  responseType?: ResponseContentEnum.Json;
  /**
   * Whether this request should be sent with outgoing credentials (cookies).
   */
  withCredentials?: boolean;
}

interface SubscriptionMethods {
  success: (value: any) => void;
  error?: (error: any) => void;
  complete?: () => void;
}

/**
 * Performs HTTP requests.
 *
 * `EndpointService` is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * @stacked-example(Endpoint Service Showcase, logo/core-sample/endpoint-service-showcase/endpoint-service-showcase.component)
 *
 * ### HTTP Request Example
 *
 * ```typescript
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *  const params = new HttpParams({fromString: 'name=term'});
 *  return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 *
 * ### JSONP Example
 * ```typescript
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 */
@Injectable()
export class EndpointService {

  /**
   * Creates initial HttpClient
   * @param http - `HttpClient` is available as an injectable class, with methods to perform HTTP requests.
   * Each request method has multiple signatures, and the return type varies based on
   * the signature that is called (mainly the values of `observe` and `responseType`).
   */
  constructor(@Optional() @SkipSelf() private http: HttpClient) {
  }

  /**
   * As a default, Constructs a request which interprets the body as a JSON object and returns the full `HTTPResponse`.
   * With the option parameter, the request can be changed to any optional response.
   *
   * @param method - one of the HTTP method
   * @param url - The endpoint URL
   * @param options - The HTTP options to send with the request
   *
   * @return An `Observable` of the `HTTPResponse`, with the response body of type `Object`.
   */
  request(method: string, url: string, options: RequestOption = {}): Observable<any> {
    options.observe = options && options.observe ? options.observe : 'response';
    options.responseType = options.responseType ? options.responseType : ResponseContentEnum.Json;
    const headers = new HttpHeaders({...{'Content-Type': 'application/json'}, ...options.headers});
    return this.http.request(method, url, {...options, headers: headers});
  }

  /**
   * As a default, Constructs a `GET` request that interprets the body as a JSON object and returns the full `HTTPResponse`.
   * With the option parameter, the request can be changed to any optional response.
   *
   * @param url - The endpoint URL.
   * @param options - The HTTP options to send with the request.
   *
   * @return An `Observable` of the full `HTTPResponse` for the request, with a response body in the requested type.
   */
  get(url: string, options: RequestOption = {}): Observable<any> {
    options.observe = options && options.observe ? options.observe : 'response';
    options.responseType = options.responseType ? options.responseType : ResponseContentEnum.Json;
    const headers = new HttpHeaders({...{'Content-Type': 'application/json'}, ...options.headers});
    return this.http.get(url, {...options, headers: headers});
  }

  /**
   * As a default, Constructs a `POST` request that interprets the body as a JSON object and returns the full `HTTPResponse`.
   * With the option parameter, the request can be changed to any optional response.
   *
   * @param url       The endpoint URL.
   * @param body      The content to replace with.
   * @param options   HTTP options
   *
   * @return An `Observable` of the `HTTPResponse` for the request, with a response body in the requested type.
   */
  post(url: string, body: any, options: RequestOption = {}): Observable<any> {
    options.observe = options && options.observe ? options.observe : 'response';
    options.responseType = options.responseType ? options.responseType : ResponseContentEnum.Json;
    const headers = new HttpHeaders({...{'Content-Type': 'application/json'}, ...options.headers});
    return this.http.post(url, body, {...options, headers: headers});
  }
}
