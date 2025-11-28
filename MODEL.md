# State Documentation

## Table of Contents

- [Overview](#overview)
- [state.proto](#state)
  - [Messages](#messages)
    - [State](#state)
  - [Enums](#enums)
    - [StateType](#statetype)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The State provides a comprehensive data structure for managing state within the system. This model supports metadata and audit: includes metadata and audit trails for tracking changes, and more. 

Key features of the state model include:
- **Metadata and Audit**: Includes metadata and audit trails for tracking changes

## state.proto

### Package Information

- **Package Name**: `state`
- **Go Package Path**: `github.com/sologenic/com-fs-state-model;state`

### Overview

The `state.proto` file defines the core state model for state management. It provides message types for representing state data and operations. The file integrates with external utility libraries: `metadata.proto`.

### Messages

#### State {#state}

The `State` message provides state data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| StateType | `StateType` | Required | Type classification for this item (see related enum) |
| Content | `string` | Required | Content value |
| MetaData | `metadata.MetaData` | Required | Metadata information including network and version details |

**Use Cases:**
- Creating new state records
- Retrieving state information
- Updating state data

**Important Notes:**
- This message provides the state representation

### Enums

#### StateType {#statetype}

The `StateType` enum defines the possible states or types for state, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_USED | 0 | Default/unused value (protobuf convention) |
| ORDER_PURCHASE_LISTENER | 1 | Order Purchase Listener state or type |
| ORDER_SELL_LISTENER | 2 | Order Sell Listener state or type |
| ORDER_CANCEL_REQUEST_LISTENER | 3 | Order Cancel Request Listener state or type |
| ORDER_UPDATE_LISTENER | 4 | Order Update Listener state or type |
| ORDER_PAY_LISTENER | 5 | Order Pay Listener state or type |
| REATTESTATION_REQUEST_LISTENER | 6 | Reattestation Request Listener state or type |
| PUB_SUB | 7 | Pub Sub state or type |

**Use Cases:**
- Setting statetype for items
- Filtering items by statetype in queries
- Enforcing business logic based on statetype

**Important Notes:**
- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid statetype values should be used in production code
- StateType changes should be tracked in audit trails for compliance purposes

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `state.proto`. The proto file(s) use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:
- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in `state.proto` for the authoritative source of truth
- Check the imported utility libraries for details on related types:
  - `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
