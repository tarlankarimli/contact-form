/**
 * Get async data branch.
 *
 * @param data {T} Entity data.
 * @param error {Error} Error object.
 * @param status {EProcessStatus} Current branch status.
 */
import { EProcessStatus } from "../enums";
import { IAsyncData } from "../models";

export const getAsyncData = <T>(
  data: T = null,
  error: Error = null,
  eventName: string = null,
  status: EProcessStatus = EProcessStatus.IDLE
): IAsyncData<T> => ({ data, error, status, eventName });

/**
 * Initial async data.
 */
export const getInitialAsyncData = <T>(initialData: T = null): IAsyncData<T> =>
  getAsyncData(initialData);
