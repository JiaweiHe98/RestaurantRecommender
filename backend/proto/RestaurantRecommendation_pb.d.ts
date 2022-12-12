// package: 
// file: RestaurantRecommendation.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UserLikedRestaurants extends jspb.Message { 
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): UserLikedRestaurants;
    addIds(value: string, index?: number): string;
    getReceived(): number;
    setReceived(value: number): UserLikedRestaurants;
    getAsking(): number;
    setAsking(value: number): UserLikedRestaurants;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserLikedRestaurants.AsObject;
    static toObject(includeInstance: boolean, msg: UserLikedRestaurants): UserLikedRestaurants.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserLikedRestaurants, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserLikedRestaurants;
    static deserializeBinaryFromReader(message: UserLikedRestaurants, reader: jspb.BinaryReader): UserLikedRestaurants;
}

export namespace UserLikedRestaurants {
    export type AsObject = {
        idsList: Array<string>,
        received: number,
        asking: number,
    }
}

export class RecommendedRestaurants extends jspb.Message { 
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): RecommendedRestaurants;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecommendedRestaurants.AsObject;
    static toObject(includeInstance: boolean, msg: RecommendedRestaurants): RecommendedRestaurants.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecommendedRestaurants, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecommendedRestaurants;
    static deserializeBinaryFromReader(message: RecommendedRestaurants, reader: jspb.BinaryReader): RecommendedRestaurants;
}

export namespace RecommendedRestaurants {
    export type AsObject = {
        idsList: Array<string>,
    }
}
