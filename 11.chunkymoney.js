function chunk(arr, size) {
	// Break it up.
	var res = [];

	while (arr.length > 0) {
		var tempSubArr = [];
		// fill each Sub-array with elements until the length is equal to the size
		for (var i = 0; i < size; i++) {
			// handle the case in which the size is greater than the remaining elements in array
			if (arr.length < size) {
				for (var j = 0; j < arr.length; j++) {
					tempSubArr.push(arr[j]);
				}
				break;
			}
			// push elments into the sub-array
			tempSubArr.push(arr[i]);
		}

		// slice out the elements that already made up a sub-array 
		arr = arr.slice(size);
		// push the created sub-array to the resulting multidimentional area
		res.push(tempSubArr);
	}
	return res;
}

chunk(['a', 'b', 'c', 'd'], 2);