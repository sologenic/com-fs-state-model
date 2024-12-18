import _m0 from "protobufjs/minimal";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "state";
export declare enum StateType {
    NOT_USED = 0,
    ORDER_PURCHASE_LISTENER = 1,
    ORDER_SELL_LISTENER = 2,
    ORDER_CANCEL_REQUEST_LISTENER = 3,
    /** ORDER_UPDATE_LISTENER - Order Execution */
    ORDER_UPDATE_LISTENER = 4,
    ORDER_PAY_LISTENER = 5,
    REATTESTATION_REQUEST_LISTENER = 6,
    PUB_SUB = 7,
    UNRECOGNIZED = -1
}
export declare function stateTypeFromJSON(object: any): StateType;
export declare function stateTypeToJSON(object: StateType): string;
export interface State {
    Network: Network;
    StateType: StateType;
    Content: string;
    CreatedAt: Date | undefined;
    UpdatedAt: Date | undefined;
}
export declare const State: {
    encode(message: State, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): State;
    fromJSON(object: any): State;
    toJSON(message: State): unknown;
    create<I extends {
        Network?: Network | undefined;
        StateType?: StateType | undefined;
        Content?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
    } & {
        Network?: Network | undefined;
        StateType?: StateType | undefined;
        Content?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
    } & { [K in Exclude<keyof I, keyof State>]: never; }>(base?: I | undefined): State;
    fromPartial<I_1 extends {
        Network?: Network | undefined;
        StateType?: StateType | undefined;
        Content?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
    } & {
        Network?: Network | undefined;
        StateType?: StateType | undefined;
        Content?: string | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof State>]: never; }>(object: I_1): State;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
