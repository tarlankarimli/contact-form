import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { IRestClient } from "models";

/**
 * HTTP request method.
 */
type TRequestMethod = "get" | "post" | "put" | "delete";

/**
 * Rest client.
 */
export class RestClient implements IRestClient {
  public readonly axios: AxiosInstance;

  constructor(axiosInstance?: AxiosInstance) {
    /** Rest client instance */
    this.axios = axiosInstance || Axios.create();
  }

  /**
   * Executing HTTP API request.
   *
   * @param {TRequestMethod} method HTTP request method.
   * @param {string} url Request URL.
   * @param {TRequestData} data Data for POST/PUT requests.
   * @param {AxiosRequestConfig} config Optional config.
   */
  private async requestApi<TRequestData>(
    method: TRequestMethod,
    url: string,
    data: TRequestData,
    config: AxiosRequestConfig = {
      headers: {
        "Content-type": "application/json"
      }
    }
    
  ): Promise<AxiosResponse> {

    const requestConfig: AxiosRequestConfig = {
      ...config,
      headers: {
        "Content-type": "application/json"
      },
      data,
      method,
      url,
    };

    return new Promise<AxiosResponse>((resolve, reject) => {
      try {
        const response =  this.axios.request(requestConfig);
        resolve(response);
      } catch (error) {
        reject("Error")
      }
    });
  }

  /**
   * GET request method.
   *
   * @param {string} url REST path.
   * @param {AxiosRequestConfig} config Optional config.
   */
  public async get<TResponseData>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<TResponseData> {
    const response = await this.requestApi("get", url, {}, config);
    return response.data;
  }

  /**
   * POST request method.
   *
   * @param {string} url REST path.
   * @param {TRequestData} data Data for POST request.
   * @param {AxiosRequestConfig} config Optional config.
   */
  public async post<TRequestData, TResponseData>(
    url: string,
    data?: TRequestData,
    config?: AxiosRequestConfig,
  ): Promise<TResponseData> {
    const response = await this.requestApi("post", url, data, config);
    return response.data;
  }

  /**
   * PUT request method.
   *
   * @param {string} url REST path.
   * @param {TRequestData} data Data for PUT request.
   * @param {AxiosRequestConfig} config Optional config.
   */
  public async put<TRequestData, TResponseData>(
    url: string,
    data?: TRequestData,
    config?: AxiosRequestConfig,
  ): Promise<TResponseData> {
    const response = await this.requestApi("put", url, data, config);
    return response.data;
  }

  /**
   * DELETE request method.
   *
   * @param {string} url REST path.
   * @param {AxiosRequestConfig} config Optional config.
   */
  public async del<TResponseData>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<TResponseData> {
    const response = await this.requestApi("delete", url, null, config);
    return response.data;
  }
}
