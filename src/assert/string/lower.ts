import {ReplaceParameters} from '@axiona/array/replace.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';
import Inclusive from '../../inclusive/inclusive.js';
import Maximum from '../../maximum/maximum.js';
/**
 * message for lower validation
 */

export function LowerParameters(
    value : number,
    valid : boolean,
    maximum : number,
    inclusive : boolean,
    subject  = 'value'
) : string {

    const strings : string[] = [];

    strings.push(subject);


    if(valid) {

        strings.push(`is lower`);

    } else {

        strings.push(`must lower`);
    }

    if(inclusive) {

        strings.push(`or equal`);
    }

    strings.push('than', `"${maximum}"`);

    if(!valid) {

        ReplaceParameters(strings, 3 + (inclusive ? 1 : 0), value=>value+ ',');

        strings.push('actual', `"${value}"`);
    }

    return strings.join(' ') + '.';
}


/**
 * message for lower validation
 */
export function LowerParameter(
    {
        valid,
        value,
        maximum,
        inclusive,
        subject,
    } : Value<number> & Validatable & Maximum & Inclusive & {subject ?: string}
) : string {

    return LowerParameters(value, valid, maximum, inclusive, subject);
}


namespace Lower {
    export const Parameters = LowerParameters;
    export const Parameter = LowerParameter;
}
export default Lower;
