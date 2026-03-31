/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { MetaData } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
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
    StateType[StateType["ORDER_PASS_LISTENER"] = 8] = "ORDER_PASS_LISTENER";
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
        case 8:
        case "ORDER_PASS_LISTENER":
            return StateType.ORDER_PASS_LISTENER;
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
        case StateType.ORDER_PASS_LISTENER:
            return "ORDER_PASS_LISTENER";
        case StateType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseState() {
    return { StateType: 0, Content: "", MetaData: undefined };
}
export const State = {
    encode(message, writer = _m0.Writer.create()) {
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
                    message.StateType = reader.int32();
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
    fromJSON(object) {
        return {
            StateType: isSet(object.StateType) ? stateTypeFromJSON(object.StateType) : 0,
            Content: isSet(object.Content) ? globalThis.String(object.Content) : "",
            MetaData: isSet(object.MetaData) ? MetaData.fromJSON(object.MetaData) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return State.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseState();
        message.StateType = (_a = object.StateType) !== null && _a !== void 0 ? _a : 0;
        message.Content = (_b = object.Content) !== null && _b !== void 0 ? _b : "";
        message.MetaData = (object.MetaData !== undefined && object.MetaData !== null)
            ? MetaData.fromPartial(object.MetaData)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
