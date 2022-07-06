import Validator from '@alirya/validator/validator.js';
import InfiniteValidatable from '../validatable/infinite.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import InfiniteString from '../assert/string/infinite.js';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import InfiniteStringParameter from '../assert/string/infinite.js';

export function InfiniteParameters() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export function InfiniteParameters<MessageT>(
    message : ValidatableParameters<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export function InfiniteParameters<MessageT>(
    message : ValidatableParameters<number, MessageT|string> = InfiniteString.Parameters
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>> {

    return function (value) {

        return InfiniteValidatable.Parameters(value, message);

    } as Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;
}


export function InfiniteParameter() : Validator<number, number, boolean, boolean, Readonly<Instance<number, string>>>;

export function InfiniteParameter<MessageT>(
    message : ValidatableParameter<number, MessageT>
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>;

export function InfiniteParameter<MessageT>(
    message : ValidatableParameter<number, MessageT|string> = InfiniteStringParameter.Parameter
) : Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT|string>>> {

    return InfiniteParameters((value, valid) => message({value, valid}));
}


namespace Infinite {
    export const Parameters = InfiniteParameters;
    export const Parameter = InfiniteParameter;
}
export default Infinite;
