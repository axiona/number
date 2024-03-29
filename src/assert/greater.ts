import IsGreater from '../boolean/greater.js';
import Callback from '@axiona/function/assert/callback.js';
import GreaterError from './throwable/greater.js';
/**
 * assert if {@param number} is greater than {@param minimum} or equal if {@param inclusive} is true
 *
 * @param number
 * @param minimum
 * @param inclusive
 * @param error
 * @constructor
 */
export default function Greater(
    number : number,
    minimum : number,
    inclusive : boolean,
    error : (value : number, minimum : number, inclusive : boolean)=>Error = GreaterError.Parameters
) : asserts number is number {

    Callback.Parameters(number, IsGreater.Parameters, error, minimum, inclusive);
}
