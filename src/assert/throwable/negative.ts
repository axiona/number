import NegativeType from '../string/negative.js';
import Value from '@axiona/value/value.js';

export function NegativeParameters(
    value : number,
    subject ?: string
) : Error {

    return new Error(NegativeType.Parameters(value, false));
}


export function NegativeParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return NegativeParameters(value, subject);
}


namespace Negative {
    export const Parameters = NegativeParameters;
    export const Parameter = NegativeParameter;
}
export default Negative;
