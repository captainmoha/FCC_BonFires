function where(arr, num) {
	// Find my place in this sorted array.
	var lowestIndex = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < num && arr[i+1] > num) {
			lowestIndex = i+1;
		}
		if (arr[i] === num) {
		    lowestIndex = i;
		}
	}
	return lowestIndex;
}

where([40, 60], 50);