import Validator from '@axiona/validator/validator.js';
import GreaterValidatable, {GreaterContext} from '../validatable/greater.js';
import {ValidatableParameters} from '@axiona/validator/message/function/validatable.js';
import GreaterString from '../assert/string/greater.js';
import Validatable from '@axiona/validator/value/validatable.js';
import Message from '@axiona/message/message.js';
import Value from '@axiona/value/value.js';
import Inclusive from '../inclusive/inclusive.js';
import Minimum from '../minimum/minimum.js';
import {ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import StrictOmit from '@axiona/object/strict-omit.js';
import {NumberParameters} from './number.js';
import Chain from '@axiona/validator/chain.js';

export type GreaterArgumentsMessage<MessageT> = ValidatableParameters<number, MessageT, [minimum:number, inclusive: boolean]>;

export function GreaterParameters(
    minimum : number,
    inclusive : boolean,
) : Validator<number, number, boolean, boolean, string, GreaterContext>;

export function GreaterParameters<MessageT>(
    minimum : number,
    inclusive : boolean,
    message : GreaterArgumentsMessage<MessageT>
) : Validator<number, number, boolean, boolean, MessageT, GreaterContext>;

export function GreaterParameters<MessageT>(
    minimum : number,
    inclusive : boolean,
    message : GreaterArgumentsMessage<MessageT|string> = GreaterString.Parameters
) : Validator<number, number, boolean, boolean, MessageT|string, GreaterContext> {


    return Chain(NumberParameters(), function (value) {

        return new GreaterValidatable.Parameters(value, minimum, inclusive, message);

    }) as Validator<number, number, boolean, boolean, MessageT|string, GreaterContext>;

    // return function (value) {
    //
    //     return new GreaterValidatable.Parameters(value, minimum, inclusive, message);
    //
    // } as Validator<number, number, boolean, boolean, MessageT|string>;

}

export type GreaterArgumentMessage<MessageT> = ValidatableParameter<number, MessageT, Inclusive & Minimum & Validatable<number>>;

export type GreaterArgument<MessageT> =
    Minimum &
    Inclusive &
    Partial<Message<GreaterArgumentMessage<MessageT>>>;

export function GreaterParameter<MessageT>(
    {
        minimum,
        inclusive,
        message,
    } : Required<GreaterArgument<MessageT>>
) : Validator<number, number, boolean, boolean, MessageT, GreaterContext>;

export function GreaterParameter(
    {
        minimum,
        inclusive,
    } : StrictOmit<GreaterArgument<string>, 'message'>
) : Validator<number, number, boolean, boolean, string, GreaterContext>;


export function GreaterParameter<MessageType>(
    {
        minimum,
        inclusive,
        message = GreaterString.Parameter,
    } : Minimum & Inclusive & Message<(result:Readonly<Value<number> & Inclusive & Minimum & Validatable>)=>MessageType|string>
) : Validator<number, number, boolean, boolean, MessageType|string, GreaterContext>  {

    return GreaterParameters(
        minimum,
        inclusive,
        (value, valid, minimum, inclusive) => message({value, valid, minimum, inclusive})
    );
}


namespace Greater {
    export const Parameters = GreaterParameters;
    export const Parameter = GreaterParameter;
    export type Argument<MessageT> = GreaterArgument<MessageT>;
    export type ArgumentsMessage<MessageT> = GreaterArgumentsMessage<MessageT>;
    export type ArgumentMessage<MessageT> = GreaterArgumentMessage<MessageT>;
}
export default Greater;
