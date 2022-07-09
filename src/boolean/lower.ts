import Value from '@alirya/value/value';
import Inclusive from '../inclusive/inclusive';
import Maximum from '../maximum/maximum';
/**
 * check if {@param value} is lower than {@param maximum} or equal if {@param inclusive} is true
 *
 * @param value
 * @param maximum
 * @param inclusive
 */
export function LowerParameters(
    value : number,
    maximum : number,
    inclusive : boolean = false
) : boolean {

    return inclusive ? value <= maximum : value < maximum;
}

export type LowerArgument = Value<number> & Maximum & Inclusive;
/**
 * check if {@param number} is lower than {@param maximum} or equal if {@param inclusive} is true
 *
 * @param number
 * @param maximum
 * @param inclusive
 */
export function LowerParameter(
    {
        value,
        maximum,
        inclusive,
    } : LowerArgument
) : boolean {

    return LowerParameters(value, maximum, inclusive);
}


namespace Lower {
    export const Parameters = LowerParameters;
    export const Parameter = LowerParameter;
    export type Argument = LowerArgument;
}
export default Lower;