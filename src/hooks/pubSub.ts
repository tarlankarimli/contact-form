import PubSub from "pubsub-js";

import { EProcessStatus } from "enums";
import { getAsyncData } from "helpers/asyncData";
import { IAsyncData } from "models";

window.PubSub = window.PubSub || PubSub;

interface IPublishAsyncEvent {
  eventName: string;
  fn: Function;
  initialValue?: IAsyncData<unknown>;
  onPending?: (res: any) => void;
  onSuccess?: (res: any) => void;
  onError?: (res: any) => void;
  onAll?: (res: any) => void;
}

export async function publishAsyncEvent({
  eventName,
  fn,
  initialValue = getAsyncData(),
  onPending = (res) => {},
  onSuccess = (res) => {},
  onError = (res) => {},
  onAll = (res) => {},
}: IPublishAsyncEvent) {
  setTimeout(async function addToQueueEvent() {
    let eventResult;
    try {
      PubSub.publishSync(`${eventName}.PENDING`, {
        ...initialValue,
        status: EProcessStatus.PENDING,
        eventName,
      });
      eventResult = {
        ...initialValue,
        status: EProcessStatus.PENDING,
        eventName,
      };
      onAll(eventResult);
      onPending(eventResult);
      const response = await fn();
      const result = response instanceof Blob ? { data: response } : response;

      eventResult = {
        ...result,
        status: EProcessStatus.SUCCESS,
        eventName,
      };

      PubSub.publishSync(`${eventName}.DONE`, eventResult);
      onAll(eventResult);
      onSuccess({ ...result, eventName });
    } catch (error) {
      eventResult = {
        ...initialValue,
        status: EProcessStatus.ERROR,
        error,
        eventName,
      };
      PubSub.publishSync(`${eventName}.ERROR`, eventResult);
      PubSub.publishSync("GLOBAL.ERROR", { error });

      onAll(eventResult);
      onError(eventResult);
    }
  }, 0);
}
