import {ReplaceParameters} from '@axiona/array/replace.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';

export function FiniteParameters(
    value : number,
    valid : boolean,
    subject  = 'value'
) : string {


    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('finite number');

    if(!valid) {

        ReplaceParameters(strings, 2 , value => value+ ',');

        strings.push('actual', `"${value}"`);
    }

    return strings.join(' ') + '.';
}


export function FiniteParameter(
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return FiniteParameters(value, valid, subject);
}


namespace Finite {
    export const Parameters = FiniteParameters;
    export const Parameter = FiniteParameter;
}
export default Finite;
