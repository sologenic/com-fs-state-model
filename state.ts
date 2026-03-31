/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { MetaData } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";

export const protobufPackage = "state";

export enum StateType {
  NOT_USED = 0,
  ORDER_PURCHASE_LISTENER = 1,
  ORDER_SELL_LISTENER = 2,
  ORDER_CANCEL_REQUEST_LISTENER = 3,
  /** ORDER_UPDATE_LISTENER - Order Execution */
  ORDER_UPDATE_LISTENER = 4,
  ORDER_PAY_LISTENER = 5,
  REATTESTATION_REQUEST_LISTENER = 6,
  PUB_SUB = 7,
  ORDER_PASS_LISTENER = 8,
  UNRECOGNIZED = -1,
}

export function stateTypeFromJSON(object: any): StateType {
  switch (object) {
    case 0:
    case "NOT_USED":
      return StateType.NOT_USED;
    case 1:
    case "ORDER_PURCHASE_LISTENER":
      return StateType.ORDER_PURCHASE_LISTENER;
    case 2:
    case "ORDER_SELL_LISTENER":
      return StateType.ORDER_SELL_LISTENER;
    case 3:
    case "ORDER_CANCEL_REQUEST_LISTENER":
      return StateType.ORDER_CANCEL_REQUEST_LISTENER;
    case 4:
    case "ORDER_UPDATE_LISTENER":
      return StateType.ORDER_UPDATE_LISTENER;
    case 5:
    case "ORDER_PAY_LISTENER":
      return StateType.ORDER_PAY_LISTENER;
    case 6:
    case "REATTESTATION_REQUEST_LISTENER":
      return StateType.REATTESTATION_REQUEST_LISTENER;
    case 7:
    case "PUB_SUB":
      return StateType.PUB_SUB;
    case 8:
    case "ORDER_PASS_LISTENER":
      return StateType.ORDER_PASS_LISTENER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StateType.UNRECOGNIZED;
  }
}

export function stateTypeToJSON(object: StateType): string {
  switch (object) {
    case StateType.NOT_USED:
      return "NOT_USED";
    case StateType.ORDER_PURCHASE_LISTENER:
      return "ORDER_PURCHASE_LISTENER";
    case StateType.ORDER_SELL_LISTENER:
      return "ORDER_SELL_LISTENER";
    case StateType.ORDER_CANCEL_REQUEST_LISTENER:
      return "ORDER_CANCEL_REQUEST_LISTENER";
    case StateType.ORDER_UPDATE_LISTENER:
      return "ORDER_UPDATE_LISTENER";
    case StateType.ORDER_PAY_LISTENER:
      return "ORDER_PAY_LISTENER";
    case StateType.REATTESTATION_REQUEST_LISTENER:
      return "REATTESTATION_REQUEST_LISTENER";
    case StateType.PUB_SUB:
      return "PUB_SUB";
    case StateType.ORDER_PASS_LISTENER:
      return "ORDER_PASS_LISTENER";
    case StateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface State {
  StateType: StateType;
  Content: string;
  MetaData: MetaData | undefined;
}

function createBaseState(): State {
  return { StateType: 0, Content: "", MetaData: undefined };
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.StateType !== 0) {
      writer.uint32(8).int32(message.StateType);
    }
    if (message.Content !== "") {
      writer.uint32(18).string(message.Content);
    }
    if (message.MetaData !== undefined) {
      MetaData.encode(message.MetaData, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.StateType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Content = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.MetaData = MetaData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): State {
    return {
      StateType: isSet(object.StateType) ? stateTypeFromJSON(object.StateType) : 0,
      Content: isSet(object.Content) ? globalThis.String(object.Content) : "",
      MetaData: isSet(object.MetaData) ? MetaData.fromJSON(object.MetaData) : undefined,
    };
  },

  toJSON(message: State): unknown {
    const obj: any = {};
    if (message.StateType !== 0) {
      obj.StateType = stateTypeToJSON(message.StateType);
    }
    if (message.Content !== "") {
      obj.Content = message.Content;
    }
    if (message.MetaData !== undefined) {
      obj.MetaData = MetaData.toJSON(message.MetaData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<State>, I>>(base?: I): State {
    return State.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState();
    message.StateType = object.StateType ?? 0;
    message.Content = object.Content ?? "";
    message.MetaData = (object.MetaData !== undefined && object.MetaData !== null)
      ? MetaData.fromPartial(object.MetaData)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
