const generator = require("../GeneratorRandomNumber");


describe("Generator Random Number Test", () => {

	it("Should return an number between 0 and 5", () => {
		expect(generator(0,5)).toBeGreaterThanOrEqual(0);
		expect(generator(0,5)).toBeLessThanOrEqual(5);
	});
});
