/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "state";

export enum StateType {
  NOT_USED = 0,
  ORDER_PURCHASE_LISTENER = 1,
  ORDER_SELL_LISTENER = 2,
  ORDER_CANCEL_LISTENER = 3,
  ORDER_UPDATE_LISTENER = 4,
  ORDER_PAY_LISTENER = 5,
  REATTESTATION_REQUEST_LISTENER = 6,
  PUB_SUB = 7,
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
    case "ORDER_CANCEL_LISTENER":
      return StateType.ORDER_CANCEL_LISTENER;
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
    case StateType.ORDER_CANCEL_LISTENER:
      return "ORDER_CANCEL_LISTENER";
    case StateType.ORDER_UPDATE_LISTENER:
      return "ORDER_UPDATE_LISTENER";
    case StateType.ORDER_PAY_LISTENER:
      return "ORDER_PAY_LISTENER";
    case StateType.REATTESTATION_REQUEST_LISTENER:
      return "REATTESTATION_REQUEST_LISTENER";
    case StateType.PUB_SUB:
      return "PUB_SUB";
    case StateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface State {
  Network: string;
  StateType: StateType;
  Content: string;
  CreatedAt: Date | undefined;
  UpdatedAt: Date | undefined;
}

function createBaseState(): State {
  return { Network: "", StateType: 0, Content: "", CreatedAt: undefined, UpdatedAt: undefined };
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Network !== "") {
      writer.uint32(10).string(message.Network);
    }
    if (message.StateType !== 0) {
      writer.uint32(16).int32(message.StateType);
    }
    if (message.Content !== "") {
      writer.uint32(26).string(message.Content);
    }
    if (message.CreatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.CreatedAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.UpdatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.UpdatedAt), writer.uint32(42).fork()).ldelim();
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
          if (tag !== 10) {
            break;
          }

          message.Network = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.StateType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.Content = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.CreatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.UpdatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      Network: isSet(object.Network) ? globalThis.String(object.Network) : "",
      StateType: isSet(object.StateType) ? stateTypeFromJSON(object.StateType) : 0,
      Content: isSet(object.Content) ? globalThis.String(object.Content) : "",
      CreatedAt: isSet(object.CreatedAt) ? fromJsonTimestamp(object.CreatedAt) : undefined,
      UpdatedAt: isSet(object.UpdatedAt) ? fromJsonTimestamp(object.UpdatedAt) : undefined,
    };
  },

  toJSON(message: State): unknown {
    const obj: any = {};
    if (message.Network !== "") {
      obj.Network = message.Network;
    }
    if (message.StateType !== 0) {
      obj.StateType = stateTypeToJSON(message.StateType);
    }
    if (message.Content !== "") {
      obj.Content = message.Content;
    }
    if (message.CreatedAt !== undefined) {
      obj.CreatedAt = message.CreatedAt.toISOString();
    }
    if (message.UpdatedAt !== undefined) {
      obj.UpdatedAt = message.UpdatedAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<State>, I>>(base?: I): State {
    return State.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState();
    message.Network = object.Network ?? "";
    message.StateType = object.StateType ?? 0;
    message.Content = object.Content ?? "";
    message.CreatedAt = object.CreatedAt ?? undefined;
    message.UpdatedAt = object.UpdatedAt ?? undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
