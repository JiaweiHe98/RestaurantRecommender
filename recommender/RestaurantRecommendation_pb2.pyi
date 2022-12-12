from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class RecommendedRestaurants(_message.Message):
    __slots__ = ["ids"]
    IDS_FIELD_NUMBER: _ClassVar[int]
    ids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, ids: _Optional[_Iterable[str]] = ...) -> None: ...

class UserLikedRestaurants(_message.Message):
    __slots__ = ["asking", "ids", "received"]
    ASKING_FIELD_NUMBER: _ClassVar[int]
    IDS_FIELD_NUMBER: _ClassVar[int]
    RECEIVED_FIELD_NUMBER: _ClassVar[int]
    asking: int
    ids: _containers.RepeatedScalarFieldContainer[str]
    received: int
    def __init__(self, ids: _Optional[_Iterable[str]] = ..., received: _Optional[int] = ..., asking: _Optional[int] = ...) -> None: ...
