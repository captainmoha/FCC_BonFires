/*  You will be provided with an initial array (the first argument in the destroyer function),
 followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. */

function destroyer(arr) {
	// get arguments
	var args = Array.prototype.slice.call(arguments, 1);
	// copy array
	var cpArr = arr.slice();
	// loop elements
	for (var elt = 0; elt < arr.length; elt++) {
		// loop args
		for (var arg = 0; arg < args.length; arg++) {
			if (arr[elt] === args[arg]) {
				// remove matches
				cpArr.splice(cpArr.indexOf(arr[elt]), 1);
			}
		}
	}
	return cpArr;
}

// another solution using filter
function destroyer(arr) {
	// get arguments
	var args = Array.prototype.slice.call(arguments, 1);

	// Filter array and return it
	return arr.filter(function(item) {
		// Only keep items not in the destroy list
		return args.indexOf(item) === -1;
	});
}