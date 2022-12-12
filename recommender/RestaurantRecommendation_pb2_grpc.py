# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import RestaurantRecommendation_pb2 as RestaurantRecommendation__pb2


class RestaurantRecommendationServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.getBaseModelRecommendation = channel.unary_unary(
                '/RestaurantRecommendationService/getBaseModelRecommendation',
                request_serializer=RestaurantRecommendation__pb2.UserLikedRestaurants.SerializeToString,
                response_deserializer=RestaurantRecommendation__pb2.RecommendedRestaurants.FromString,
                )
        self.getFinalModelRecommendation = channel.unary_unary(
                '/RestaurantRecommendationService/getFinalModelRecommendation',
                request_serializer=RestaurantRecommendation__pb2.UserLikedRestaurants.SerializeToString,
                response_deserializer=RestaurantRecommendation__pb2.RecommendedRestaurants.FromString,
                )


class RestaurantRecommendationServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def getBaseModelRecommendation(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def getFinalModelRecommendation(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_RestaurantRecommendationServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'getBaseModelRecommendation': grpc.unary_unary_rpc_method_handler(
                    servicer.getBaseModelRecommendation,
                    request_deserializer=RestaurantRecommendation__pb2.UserLikedRestaurants.FromString,
                    response_serializer=RestaurantRecommendation__pb2.RecommendedRestaurants.SerializeToString,
            ),
            'getFinalModelRecommendation': grpc.unary_unary_rpc_method_handler(
                    servicer.getFinalModelRecommendation,
                    request_deserializer=RestaurantRecommendation__pb2.UserLikedRestaurants.FromString,
                    response_serializer=RestaurantRecommendation__pb2.RecommendedRestaurants.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'RestaurantRecommendationService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class RestaurantRecommendationService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def getBaseModelRecommendation(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/RestaurantRecommendationService/getBaseModelRecommendation',
            RestaurantRecommendation__pb2.UserLikedRestaurants.SerializeToString,
            RestaurantRecommendation__pb2.RecommendedRestaurants.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def getFinalModelRecommendation(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/RestaurantRecommendationService/getFinalModelRecommendation',
            RestaurantRecommendation__pb2.UserLikedRestaurants.SerializeToString,
            RestaurantRecommendation__pb2.RecommendedRestaurants.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)