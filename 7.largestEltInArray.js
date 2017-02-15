function largestOfFour(arr) {
	// You can do this!
	var res = [];
	var bigNum = 0;
	for (var i = 0; i < arr.length; i++) {
		var currentSubArr = arr[i];
		for (var j = 0; j <= currentSubArr.length; j++) {
			currentElt = currentSubArr[j];
			if (currentElt >= bigNum) {
				bigNum = currentElt;
			}
		}
		res.push(bigNum);
	}
	return res;
}

largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1]
]);