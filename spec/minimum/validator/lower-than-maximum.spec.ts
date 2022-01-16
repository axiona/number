import GreaterThanMinimum from '../../../dist/minimum/validator/lower-than-maximum-parameters';
import GreaterString from '../../../dist/minimum/string/lower-than-maximum-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let validator = GreaterThanMinimum( GreaterString);
    let validatable = validator({maximum:2, minimum:1, inclusive:false});

    it('set valid', ()=>{

        try {
            // @ts-expecerror
            validatable.valid = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set value', ()=>{

        try {
            // @ts-expecerror
            validatable.value = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set minimum', ()=>{

        try {
            // @ts-expecerror
            validatable.minimum = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set inclusive', ()=>{

        try {
            // @ts-expecerror
            validatable.inclusive = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });
});


describe(`value equal to minimum`,function() {

    describe(`inclusive`,function() {

        let validator = GreaterThanMinimum(GreaterString);
        let validatable = validator({maximum:1,  minimum:1, inclusive:true});

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value.maximum).toBe(1);
            expect(validatable.value.minimum).toBe(1);
            expect(validatable.value.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        let validator = GreaterThanMinimum(GreaterString);
        let validatable = validator({maximum:1, minimum:1, inclusive:false});

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value.maximum).toBe(1);
            expect(validatable.value.minimum).toBe(1);
            expect(validatable.value.inclusive).toBeFalse();

        });
    });
});

describe(`value greater to minimum`,function() {

    describe(`inclusive`,function() {

        let validator = GreaterThanMinimum(GreaterString);
        let validatable = validator({maximum:2, minimum:1, inclusive:true});

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value.maximum).toBe(2);
            expect(validatable.value.minimum).toBe(1);
            expect(validatable.value.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        let validator = GreaterThanMinimum(GreaterString);
        let validatable = validator({maximum:2, minimum:1, inclusive:false});

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value.maximum).toBe(2);
            expect(validatable.value.minimum).toBe(1);
            expect(validatable.value.inclusive).toBeFalse();

        });
    });
});

describe(`value lower to minimum`,function() {

    describe(`inclusive`,function() {

        let validator = GreaterThanMinimum(GreaterString);
        let validatable = validator({maximum:-1, minimum:1, inclusive:true});

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value.maximum).toBe(-1);
            expect(validatable.value.minimum).toBe(1);
            expect(validatable.value.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        let validator = GreaterThanMinimum(GreaterString);
        let validatable = validator({maximum:-1, minimum:1, inclusive:false});

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value.maximum).toBe(-1);
            expect(validatable.value.minimum).toBe(1);
            expect(validatable.value.inclusive).toBeFalse();

        });
    });
});
