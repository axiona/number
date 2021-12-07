import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";
import StrictOmit from "@dikac/t-object/strict-omit";
import { PositiveArgument as NegativeArgument } from "./positive-parameter";
export { NegativeArgument };
export default function NegativeParameter<MessageT>({ value }: StrictOmit<NegativeArgument<MessageT>, 'message'>): Readonly<Validatable & Message<string> & Value<number>> & ValueOf<number> & ToString<[number | void]>;
export default function NegativeParameter<MessageT>({ message, value }: Required<NegativeArgument<MessageT>>): Readonly<Validatable & Message<MessageT> & Value<number>> & ValueOf<number> & ToString<[number | void]>;