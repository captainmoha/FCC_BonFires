var steamRolled = [];

function steamrollArray(arr) {
	// I'm a steamroller, baby
	steamRolled = [];
	flatten(arr);
	return steamRolled;
}

function flatten(arr) {
	/*
		flattens an array recursively
	*/

	// base case
	if (!Array.isArray(arr)) {
		steamRolled.push(arr);
		return;
	}

	for (var i in arr) {
		flatten(arr[i]);
	}
}


console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]) );
console.log(steamrollArray([1, {}, [3, [[4]]]]));
