function LinearSearch(array, value) {

	let results = [];

	for(let i = 0; i < array.length; i++ ) {
		if (array[i] === value) {
			results.push(i);
		}
	}

	if(!results) {
		return -1
	}

	return results
}

module.exports = LinearSearch
