import Tranformer from './Transformer';
import Options from './Options';
import JsonApiResponse from './JsonApiResponse';
export default class Context {
    input: any;
    transformer: Tranformer;
    included: boolean;
    options: any;
    render: (c: Context) => JsonApiResponse;
    constructor(render: any);
    withInput(input: any): this;
    withTransformer(transformer: Tranformer): this;
    withIncluded(included: any): this;
    withOptions(options: Options): this;
    serialize(): JsonApiResponse;
}
