import { AxiosRequestConfig } from "axios";
import { EProcessStatus } from "enums";

/**
 * Interface that defines the properties for error objects.
 */
export interface IError {
  /** HTTP error code. */
  httpCode?: number;

  /** Error flag. */
  error?: boolean;

  /** Error message. */
  message?: string;
}

/**
 * Async loading data.
 */
export interface IAsyncData<T> {
  /** Data. */
  data: T;

  /** Error. */
  error?: IError;

  /** Data loading state. */
  status: EProcessStatus;

  /** Event name. */
  eventName?: string;
}

/**
 * Rest client model.
 */
export interface IRestClient {
  get: <TResponseData>(
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<TResponseData>;
  post: <TRequestData, TResponseData>(
    url: string,
    data?: TRequestData,
    config?: AxiosRequestConfig
  ) => Promise<TResponseData>;
  put: <TRequestData, TResponseData>(
    url: string,
    data?: TRequestData,
    config?: AxiosRequestConfig
  ) => Promise<TResponseData>;
  del: <TResponseData>(
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<TResponseData>;
}


/** Select field model */
export interface ISelectField {
  [key: string]: {
      placeholder?: string;
      label?: string;
      eventname?: string;
      service?: () => {};
      component?: React.ComponentType<any>;
  };
}