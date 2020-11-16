const linear = require("../LinearSearch");

describe("Linear Search Test", () => {
	let array = ["titi", "toto", "tutu"];

	describe("Linear Search Test with just one occurrence", () => {
		it("should return 1 with Linear Search", () => {
			expect(linear.LinearSearch(array, "toto")).toEqual([1]);
		});
	});

	describe("Linear Search Test with just one occurrence", () => {
		it("should return 1 and 3 with Linear Search", () => {
			array.push("toto")
			expect(linear.LinearSearch(array, "toto")).toEqual([1,3]);
		});
	});
});
