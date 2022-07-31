import { useEffect } from "react";
import PubSub from "pubsub-js";

/*
 * Hook to Event listener.
 */
export const useEventListener = (
  key: string,
  callBacks: any = undefined,
  deps: Array<any> = []
) => {
  useEffect(() => {
    callBacks.forEach((callBack: (arg: any) => void) => {
      PubSub.subscribe(key, (_, data) => callBack(data));
    });
    return () => {
      PubSub.unsubscribe(key);
    };
  }, deps);
};
