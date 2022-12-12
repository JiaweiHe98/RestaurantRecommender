from concurrent import futures
import logging
import grpc
import os
import sys
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(BASE_DIR)
import RestaurantRecommendation_pb2
import RestaurantRecommendation_pb2_grpc
import sys 
sys.path.append("..") 
from models.FinalModel import recommand_process

class RestaurantRecommendationService(RestaurantRecommendation_pb2_grpc.RestaurantRecommendationService):
    def getBaseModelRecommendation(self, request, context):
        pass
    def getFinalModelRecommendation(self, request, context):
        result_ids = recommand_process(request)
        return RestaurantRecommendation_pb2.RecommendedRestaurants(ids = result_ids)

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    RestaurantRecommendation_pb2_grpc.add_RestaurantRecommendationServiceServicer_to_server(
        RestaurantRecommendationService(), server
    )
    server.add_insecure_port('[::]:50052')
    server.start()
    print("Listening on port 10052")
    server.wait_for_termination()

if __name__ == '__main__':
    print('Server starts!')
    logging.basicConfig()
    serve()