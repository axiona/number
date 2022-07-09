import {ReplaceParameters} from '@alirya/array/replace';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

export function NegativeParameters(
    value : number,
    valid : boolean,
    subject : string = 'value',
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('negative number');


    if(!valid) {

        ReplaceParameters(strings, 2, value=>value+ ',');

        strings.push('actual', `"${value}"`);
    }

    return strings.join(' ') + '.';
}



export function NegativeParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return NegativeParameters(value, valid, subject);

}



namespace Negative {
    export const Parameters = NegativeParameters;
    export const Parameter = NegativeParameter;
}
export default Negative;