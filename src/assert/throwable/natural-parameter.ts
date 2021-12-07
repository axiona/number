import NaturalParameters from "./natural-parameters";
import Value from "@dikac/t-value/value";

export default function NaturalParameter(
    {
        value,
        subject,
    } : Value<number> & {subject ?: string}
) : Error {

    return NaturalParameters(value, subject);
}
