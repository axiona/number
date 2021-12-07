import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import PositiveValidation from "../boolean/positive";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
import PositiveString from "../assert/string/positive-parameters";

export default function PositiveParameters<MessageT>(
    value : number,
) : Readonly<ValidatorValidatable<number, MessageT>>;

export default function PositiveParameters<MessageT>(
    value : number,
    message : Dynamic<number, MessageT>
) : Readonly<ValidatorValidatable<number, MessageT>>;
export default function PositiveParameters<MessageT>(
    value : number,
    message : Dynamic<number, MessageT|string> = PositiveString
) : Readonly<ValidatorValidatable<number, MessageT>> {

    return Callback(value, PositiveValidation, message) as ValidatorValidatable<number, MessageT>;
}