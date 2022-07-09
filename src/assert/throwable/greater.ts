import GreaterType from '../string/greater';
import Value from '@alirya/value/value';
import Minimum from '../../minimum/minimum';
import Inclusive from '../../inclusive/inclusive';

export function GreaterParameters(
    number : number,
    minimum : number,
    inclusive : boolean,
    subject ?: string
) : Error {

    return new Error(GreaterType.Parameters(number, false, minimum, inclusive, subject));
}


export function GreaterParameter(
    {
        value,
        minimum,
        inclusive,
        subject,
    } : Value<number> & Minimum & Inclusive & {subject ?: string}
) : Error {

    return GreaterParameters(value, minimum, inclusive, subject);
}


namespace Greater {
    export const Parameters = GreaterParameters;
    export const Parameter = GreaterParameter;
}
export default Greater;