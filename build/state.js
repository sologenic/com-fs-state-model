/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";
import { networkFromJSON, networkToJSON } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export const protobufPackage = "state";
export var StateType;
(function (StateType) {
    StateType[StateType["NOT_USED"] = 0] = "NOT_USED";
    StateType[StateType["ORDER_PURCHASE_LISTENER"] = 1] = "ORDER_PURCHASE_LISTENER";
    StateType[StateType["ORDER_SELL_LISTENER"] = 2] = "ORDER_SELL_LISTENER";
    StateType[StateType["ORDER_CANCEL_REQUEST_LISTENER"] = 3] = "ORDER_CANCEL_REQUEST_LISTENER";
    /** ORDER_UPDATE_LISTENER - Order Execution */
    StateType[StateType["ORDER_UPDATE_LISTENER"] = 4] = "ORDER_UPDATE_LISTENER";
    StateType[StateType["ORDER_PAY_LISTENER"] = 5] = "ORDER_PAY_LISTENER";
    StateType[StateType["REATTESTATION_REQUEST_LISTENER"] = 6] = "REATTESTATION_REQUEST_LISTENER";
    StateType[StateType["PUB_SUB"] = 7] = "PUB_SUB";
    StateType[StateType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StateType || (StateType = {}));
export function stateTypeFromJSON(object) {
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
        case -1:
        case "UNRECOGNIZED":
        default:
            return StateType.UNRECOGNIZED;
    }
}
export function stateTypeToJSON(object) {
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
        case StateType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseState() {
    return { Network: 0, StateType: 0, Content: "", CreatedAt: undefined, UpdatedAt: undefined };
}
export const State = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.Network !== 0) {
            writer.uint32(8).int32(message.Network);
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
    decode(input, length) {
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
                    message.Network = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.StateType = reader.int32();
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
    fromJSON(object) {
        return {
            Network: isSet(object.Network) ? networkFromJSON(object.Network) : 0,
            StateType: isSet(object.StateType) ? stateTypeFromJSON(object.StateType) : 0,
            Content: isSet(object.Content) ? globalThis.String(object.Content) : "",
            CreatedAt: isSet(object.CreatedAt) ? fromJsonTimestamp(object.CreatedAt) : undefined,
            UpdatedAt: isSet(object.UpdatedAt) ? fromJsonTimestamp(object.UpdatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.Network !== 0) {
            obj.Network = networkToJSON(message.Network);
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
    create(base) {
        return State.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseState();
        message.Network = (_a = object.Network) !== null && _a !== void 0 ? _a : 0;
        message.StateType = (_b = object.StateType) !== null && _b !== void 0 ? _b : 0;
        message.Content = (_c = object.Content) !== null && _c !== void 0 ? _c : "";
        message.CreatedAt = (_d = object.CreatedAt) !== null && _d !== void 0 ? _d : undefined;
        message.UpdatedAt = (_e = object.UpdatedAt) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof globalThis.Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new globalThis.Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
