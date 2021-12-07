import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameters";
export declare type IntegerType<MessageT> = Readonly<Validatable & Message<MessageT> & Value<number>> & ValueOf<number> & ToString<[number | void]>;
export default function IntegerParameters(number: number): IntegerType<string>;
export default function IntegerParameters<MessageT>(number: number, message: Dynamic<number, MessageT>): IntegerType<MessageT>;