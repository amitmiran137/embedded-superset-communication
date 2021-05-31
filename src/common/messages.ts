import { v4 as uuid } from 'uuid'
import {SUPERSET_FRAME_NAME} from "./supersetContants";
import {SDK_TYPES} from "./types";


export const createMessage = (initialMessage : any, data: any) => ({
  __superSetMessage: {
    sentFrom: 'MyApp',
    messageId: initialMessage.messageId,
    payload: { type: initialMessage.payload.type, data }
  }
})

export function sendMessageToSuperset(data: any) {
    window.frames[SUPERSET_FRAME_NAME].postMessage(
        createMessage({messageId: uuid(), payload: {type: SDK_TYPES.ALL}}, data),
        '*'
    )
}
