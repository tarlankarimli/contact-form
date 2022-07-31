import { useState, useEffect } from "react";
import { publishAsyncEvent } from "./pubSub";

import { getInitialAsyncData } from "helpers/asyncData";
import { IAsyncData } from "../models";
import { useEventListener } from "./useEventListener";

interface IParams {
  eventName: string;
  fn: () => {};
  onSuccess?: Function;
  onError?: Function;
  onPending?: Function;
}

/*
 * Hook to Async Event dispatcher.
 */
export const useAsyncEventDispatch = <T = any>(
  params: IParams,
  deps: Array<any> = [],
  conditionally = true
): IAsyncData<T> => {
  const [result, setResult] = useState<IAsyncData<T>>(getInitialAsyncData());
  useEffect(() => {
    if (conditionally) {
      publishAsyncEvent({
        eventName: params.eventName,
        fn: () => params.fn(),
        onSuccess: (res: any) => params.onSuccess?.(res),
        onError: (res: any) => params.onError?.(res),
        onPending: (res: any) => params.onPending?.(res),
      });
    }
  }, deps);

  useEventListener(params.eventName, [setResult]);

  return result;
};
