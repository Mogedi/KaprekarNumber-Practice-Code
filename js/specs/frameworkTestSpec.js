(function () {
    describe("Testing Jasmine Framework", function () {
        it("will determine if it works", function () {
            expect(1).toBe(1);
        });
    });

    describe("Kaprekar Number", function () {
        it("returns an array of 1-10 using a loop", function () {
            expect(Kaprekar(1,10)).toBe(true);
        });

        it("returns an array of 1-10 squared", function () {
            expect(Kaprekar(1,10)).toBe(true);
        });

        it("returns an array of 1-10 squared", function () {
            expect(Kaprekar(101,9000)).toBe(true);
        });


    });
}());
