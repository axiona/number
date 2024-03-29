import Validator from '@axiona/validator/validator.js';
import Minimum from '../../minimum/minimum.js';
import Maximum from '../../maximum/maximum.js';
import Inclusive from '../../inclusive/inclusive.js';
import {ValidatableParameters} from '@axiona/validator/message/function/validatable.js';
import Validatable from '@axiona/validatable/validatable.js';
import GreaterThanMinimumValidatable, {LowerThanMaximumArgument, LowerThanMaximumContext} from '../validatable/lower-than-maximum.js';

export function LowerThanMaximumParameters<Base extends Minimum & Maximum & Inclusive, MessageT>(
    message : ValidatableParameters<number, MessageT, [maximum:number, inclusive:boolean]>
) : Validator<LowerThanMaximumArgument, LowerThanMaximumArgument, boolean, boolean, MessageT, LowerThanMaximumContext> {

    return function ({minimum, maximum, inclusive}) {

        return new GreaterThanMinimumValidatable.Parameters(minimum, maximum, inclusive, message);

    } as Validator<LowerThanMaximumArgument, LowerThanMaximumArgument, boolean, boolean, MessageT, LowerThanMaximumContext>;
}


export function LowerThanMaximumParameter<Base extends LowerThanMaximumArgument, MessageT>(
    message : (result:Readonly<LowerThanMaximumArgument & Validatable>)=>MessageT
) : Validator<Base, Base, boolean, boolean, MessageT, LowerThanMaximumContext> {

    return function (value) {

        return new GreaterThanMinimumValidatable.Parameter(value, message);

    } as Validator<Base, Base, boolean, boolean, MessageT, LowerThanMaximumContext>;
}


namespace LowerThanMaximum {
    export const Parameters = LowerThanMaximumParameters;
    export const Parameter = LowerThanMaximumParameter;
}
export default LowerThanMaximum;
