# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: RestaurantRecommendation.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1eRestaurantRecommendation.proto\"E\n\x14UserLikedRestaurants\x12\x0b\n\x03ids\x18\x01 \x03(\t\x12\x10\n\x08received\x18\x02 \x01(\x05\x12\x0e\n\x06\x61sking\x18\x03 \x01(\x05\"%\n\x16RecommendedRestaurants\x12\x0b\n\x03ids\x18\x01 \x03(\t2\xc2\x01\n\x1fRestaurantRecommendationService\x12N\n\x1agetBaseModelRecommendation\x12\x15.UserLikedRestaurants\x1a\x17.RecommendedRestaurants\"\x00\x12O\n\x1bgetFinalModelRecommendation\x12\x15.UserLikedRestaurants\x1a\x17.RecommendedRestaurants\"\x00\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'RestaurantRecommendation_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _USERLIKEDRESTAURANTS._serialized_start=34
  _USERLIKEDRESTAURANTS._serialized_end=103
  _RECOMMENDEDRESTAURANTS._serialized_start=105
  _RECOMMENDEDRESTAURANTS._serialized_end=142
  _RESTAURANTRECOMMENDATIONSERVICE._serialized_start=145
  _RESTAURANTRECOMMENDATIONSERVICE._serialized_end=339
# @@protoc_insertion_point(module_scope)
