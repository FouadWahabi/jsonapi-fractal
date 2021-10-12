import Context from './Context';
import JsonApiResponse from './JsonApiResponse';
export declare function transform(): Context;
export declare function serialize(data: any, type: any, options: any): JsonApiResponse;
export declare function serializeContext(ctx: Context): JsonApiResponse;
