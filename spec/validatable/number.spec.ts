import Validator from '../../dist/validatable/number-parameters';
import NumberMessage from '../../dist/assert/string/number-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validatable = Validator(<unknown>10, NumberMessage);

        if(validatable.valid) {

            // compiler pass
            let number : number = validatable.value;
            expect(number).toBe(10);

        } else {

            // @ts-expecerror
            let number : number = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        let validatable = Validator(<unknown>{}, NumberMessage);

        if(validatable.valid) {

            // compiler pass
            let number : number = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expecerror
            let number : number = validatable.value;
            // @ts-expecerror
            expect(number).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validatable = Validator(<unknown>1, NumberMessage);

        try {
            // @ts-expecerror
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expecerror
        validatable.value = true;

        try {
            // @ts-expecerror
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    let validatable = Validator(1, NumberMessage);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(1);
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    let validatable = Validator('a', NumberMessage);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe('a');
    expect(typeof validatable.message).toBe('string');

});



