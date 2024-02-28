package client

import (
	"context"

	grpcclient "github.com/sologenic/fs-utils-lib/go/grpc-client"
	grpcdef "github.com/sologenic/com-fs-state-model"
)

const endpoint = "STATE_STORE"

var client *grpcdef.StateServiceClient
var grpcClient *grpcclient.GRPCClient

/*
Initialize the client.
Depending on the parameter, the environment is determined to be either in cluster of local by:
localhost:port => local
localhost => No port is not local
*/
func initClient() {
	grpcClient = grpcclient.InitClient(endpoint)

	cl := grpcdef.NewStateServiceClient(grpcClient.Conn)
	client = &cl
}

func Client() *grpcdef.StateServiceClient {
	if client == nil {
		initClient()
	}
	return client
}

func AuthCtx(ctx context.Context) context.Context {
	if grpcClient == nil {
		initClient()
	}
	return grpcClient.AuthCtx(ctx)
}
