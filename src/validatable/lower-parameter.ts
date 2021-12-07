import Maximum from "../maximum/maximum";
import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Inclusive from "../inclusive/inclusive";
import Dynamic from "@dikac/t-validator/message/function/dynamic-parameter";
import ValueDynamic from "@dikac/t-validator/value/dynamic";
import LowerParameters from "./lower-parameters";

export type LowerArgument<ValueT extends number, MessageT> =
    Value<ValueT> &
    Maximum &
    Inclusive &
    Message<Dynamic<ValueT, MessageT, ValueDynamic<ValueT> & Inclusive & Maximum>>

export default class LowerParameter<ValueT extends number, MessageT> extends LowerParameters<ValueT, MessageT> {

    constructor(
        {
            value,
            maximum,
            inclusive,
            message,
        } : LowerArgument<ValueT, MessageT>,
        //
        //
        // readonly value : ValueT,
        // readonly maximum : number,
        // readonly inclusive : boolean,
        // private messageFactory : (result:Readonly<Value<ValueT> & Inclusive & Maximum & Validatable>)=>MessageT
    ) {

        super(
            value,
            maximum,
            inclusive,
            (value, valid, maximum, inclusive) =>
                message({value, valid, maximum, inclusive})
        );

    }

}