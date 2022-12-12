// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var RestaurantRecommendation_pb = require('./RestaurantRecommendation_pb.js');

function serialize_RecommendedRestaurants(arg) {
  if (!(arg instanceof RestaurantRecommendation_pb.RecommendedRestaurants)) {
    throw new Error('Expected argument of type RecommendedRestaurants');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RecommendedRestaurants(buffer_arg) {
  return RestaurantRecommendation_pb.RecommendedRestaurants.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UserLikedRestaurants(arg) {
  if (!(arg instanceof RestaurantRecommendation_pb.UserLikedRestaurants)) {
    throw new Error('Expected argument of type UserLikedRestaurants');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UserLikedRestaurants(buffer_arg) {
  return RestaurantRecommendation_pb.UserLikedRestaurants.deserializeBinary(new Uint8Array(buffer_arg));
}


var RestaurantRecommendationServiceService = exports.RestaurantRecommendationServiceService = {
  getBaseModelRecommendation: {
    path: '/RestaurantRecommendationService/getBaseModelRecommendation',
    requestStream: false,
    responseStream: false,
    requestType: RestaurantRecommendation_pb.UserLikedRestaurants,
    responseType: RestaurantRecommendation_pb.RecommendedRestaurants,
    requestSerialize: serialize_UserLikedRestaurants,
    requestDeserialize: deserialize_UserLikedRestaurants,
    responseSerialize: serialize_RecommendedRestaurants,
    responseDeserialize: deserialize_RecommendedRestaurants,
  },
  getFinalModelRecommendation: {
    path: '/RestaurantRecommendationService/getFinalModelRecommendation',
    requestStream: false,
    responseStream: false,
    requestType: RestaurantRecommendation_pb.UserLikedRestaurants,
    responseType: RestaurantRecommendation_pb.RecommendedRestaurants,
    requestSerialize: serialize_UserLikedRestaurants,
    requestDeserialize: deserialize_UserLikedRestaurants,
    responseSerialize: serialize_RecommendedRestaurants,
    responseDeserialize: deserialize_RecommendedRestaurants,
  },
};

exports.RestaurantRecommendationServiceClient = grpc.makeGenericClientConstructor(RestaurantRecommendationServiceService);
