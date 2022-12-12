// package: 
// file: RestaurantRecommendation.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as RestaurantRecommendation_pb from "./RestaurantRecommendation_pb";

interface IRestaurantRecommendationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getBaseModelRecommendation: IRestaurantRecommendationServiceService_IgetBaseModelRecommendation;
    getFinalModelRecommendation: IRestaurantRecommendationServiceService_IgetFinalModelRecommendation;
}

interface IRestaurantRecommendationServiceService_IgetBaseModelRecommendation extends grpc.MethodDefinition<RestaurantRecommendation_pb.UserLikedRestaurants, RestaurantRecommendation_pb.RecommendedRestaurants> {
    path: "/RestaurantRecommendationService/getBaseModelRecommendation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<RestaurantRecommendation_pb.UserLikedRestaurants>;
    requestDeserialize: grpc.deserialize<RestaurantRecommendation_pb.UserLikedRestaurants>;
    responseSerialize: grpc.serialize<RestaurantRecommendation_pb.RecommendedRestaurants>;
    responseDeserialize: grpc.deserialize<RestaurantRecommendation_pb.RecommendedRestaurants>;
}
interface IRestaurantRecommendationServiceService_IgetFinalModelRecommendation extends grpc.MethodDefinition<RestaurantRecommendation_pb.UserLikedRestaurants, RestaurantRecommendation_pb.RecommendedRestaurants> {
    path: "/RestaurantRecommendationService/getFinalModelRecommendation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<RestaurantRecommendation_pb.UserLikedRestaurants>;
    requestDeserialize: grpc.deserialize<RestaurantRecommendation_pb.UserLikedRestaurants>;
    responseSerialize: grpc.serialize<RestaurantRecommendation_pb.RecommendedRestaurants>;
    responseDeserialize: grpc.deserialize<RestaurantRecommendation_pb.RecommendedRestaurants>;
}

export const RestaurantRecommendationServiceService: IRestaurantRecommendationServiceService;

export interface IRestaurantRecommendationServiceServer {
    getBaseModelRecommendation: grpc.handleUnaryCall<RestaurantRecommendation_pb.UserLikedRestaurants, RestaurantRecommendation_pb.RecommendedRestaurants>;
    getFinalModelRecommendation: grpc.handleUnaryCall<RestaurantRecommendation_pb.UserLikedRestaurants, RestaurantRecommendation_pb.RecommendedRestaurants>;
}

export interface IRestaurantRecommendationServiceClient {
    getBaseModelRecommendation(request: RestaurantRecommendation_pb.UserLikedRestaurants, callback: (error: grpc.ServiceError | null, response: RestaurantRecommendation_pb.RecommendedRestaurants) => void): grpc.ClientUnaryCall;
    getBaseModelRecommendation(request: RestaurantRecommendation_pb.UserLikedRestaurants, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: RestaurantRecommendation_pb.RecommendedRestaurants) => void): grpc.ClientUnaryCall;
    getBaseModelRecommendation(request: RestaurantRecommendation_pb.UserLikedRestaurants, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: RestaurantRecommendation_pb.RecommendedRestaurants) => void): grpc.ClientUnaryCall;
    getFinalModelRecommendation(request: RestaurantRecommendation_pb.UserLikedRestaurants, callback: (error: grpc.ServiceError | null, response: RestaurantRecommendation_pb.RecommendedRestaurants) => void): grpc.ClientUnaryCall;
    getFinalModelRecommendation(request: RestaurantRecommendation_pb.UserLikedRestaurants, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: RestaurantRecommendation_pb.RecommendedRestaurants) => void): grpc.ClientUnaryCall;
    getFinalModelRecommendation(request: RestaurantRecommendation_pb.UserLikedRestaurants, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: RestaurantRecommendation_pb.RecommendedRestaurants) => void): grpc.ClientUnaryCall;
}

export class RestaurantRecommendationServiceClient extends grpc.Client implements IRestaurantRecommendationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getBaseModelRecommendation(request: RestaurantRecommendation_pb.UserLikedRestaurants, callback: (error: grpc.ServiceError | null, response: RestaurantRecommendation_pb.RecommendedRestaurants) => void): grpc.ClientUnaryCall;
    public getBaseModelRecommendation(request: RestaurantRecommendation_pb.UserLikedRestaurants, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: RestaurantRecommendation_pb.RecommendedRestaurants) => void): grpc.ClientUnaryCall;
    public getBaseModelRecommendation(request: RestaurantRecommendation_pb.UserLikedRestaurants, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: RestaurantRecommendation_pb.RecommendedRestaurants) => void): grpc.ClientUnaryCall;
    public getFinalModelRecommendation(request: RestaurantRecommendation_pb.UserLikedRestaurants, callback: (error: grpc.ServiceError | null, response: RestaurantRecommendation_pb.RecommendedRestaurants) => void): grpc.ClientUnaryCall;
    public getFinalModelRecommendation(request: RestaurantRecommendation_pb.UserLikedRestaurants, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: RestaurantRecommendation_pb.RecommendedRestaurants) => void): grpc.ClientUnaryCall;
    public getFinalModelRecommendation(request: RestaurantRecommendation_pb.UserLikedRestaurants, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: RestaurantRecommendation_pb.RecommendedRestaurants) => void): grpc.ClientUnaryCall;
}
