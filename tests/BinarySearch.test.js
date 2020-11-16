const binary = require("../BinarySearch");

describe("binarySearch", () => {
	const array = [9, 1, 7, 15, 13, 11, 17, 20, 19, 18, 16];
	const arraySorted = array.sort( (a, b) => a - b);

	it("should return index of number 18", () => {
		expect(binary(arraySorted, 18)).toEqual(8);
	});

	it("should return index of number 1", () => {
		expect(binary(arraySorted, 1)).toEqual(0);
	});

	it("should return index of number 20", () => {
		expect(binary(arraySorted, 20)).toEqual(array.length - 1);
	})
});
