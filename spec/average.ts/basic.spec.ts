import Average from "../../dist/average";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`basic`,() => {
    expect(Average(5, 10)).toBe(7.5);
});
