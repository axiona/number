import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import InfiniteParameters from "./infinite-parameters";

export default function InfiniteParameter(
    //value : number,
    //valid : boolean,
    //subject : string = '',
    {
        value,
        valid,
        subject,
    } : Value<number> & Validatable & {subject ?: string}
) : string {

    return InfiniteParameters(value, valid, subject);
    //
    //
    // const strings : string[] = [];
    //
    // strings.push(subject);
    //
    // if(valid) {
    //
    //     strings.push('is');
    //
    // } else {
    //
    //     strings.push('must');
    // }
    //
    // strings.push('infinite number');
    //
    // // const sentence = SentencesMust(valid, [subject]);
    // //
    // // sentence.expect = ['infinite number'];
    // // sentence.comma.push('expect');
    //
    // if(!valid) {
    //
    //     strings.push('actual', `"${value}"`);
    // }
    //
    // return strings.join(' ') + '.';
}