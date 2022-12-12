import os
import sys
import logging

import grpc
import RestaurantRecommendation_pb2_grpc
import RestaurantRecommendation_pb2
from concurrent import futures

from models.FinalModel import FinalModel
from models.BaseModel import BaseModel

PORT = 1080


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(BASE_DIR)
sys.path.append("..")


class ModelService:
    def __init__(self) -> None:
        self.baseModel = BaseModel()
        self.finalModel = FinalModel()

    def recommendBaseModel(self, business_ids, received, asking):
        return self.baseModel.recommend(business_ids, received, asking)
    
    def recommendFinalModel(self, business_ids, received, asking):
        return self.finalModel.recommend(business_ids, received, asking);


class RestaurantRecommendationService(RestaurantRecommendation_pb2_grpc.RestaurantRecommendationService):

    def __init__(self) -> None:
        self.modelService = ModelService()

    def getBaseModelRecommendation(self, request, context):
        ids = self.modelService.recommendBaseModel(
            request.ids, request.received, request.asking)
        return RestaurantRecommendation_pb2.RecommendedRestaurants(ids=ids)

    def getFinalModelRecommendation(self, request, context):
        ids = self.modelService.recommendFinalModel(
            request.ids, request.received, request.asking
        )
        return RestaurantRecommendation_pb2.RecommendedRestaurants(ids=ids)


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=2))
    RestaurantRecommendation_pb2_grpc.add_RestaurantRecommendationServiceServicer_to_server(
        RestaurantRecommendationService(), server
    )
    server.add_insecure_port(f'[::]:{PORT}')
    server.start()
    print(f"Listening on port {PORT}")
    server.wait_for_termination()


if __name__ == '__main__':
    print('Server starts!')
    logging.basicConfig()
    serve()
