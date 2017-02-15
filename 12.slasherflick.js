//Return the remaining elements of an array after chopping off
//n elements from the head.

function slasher(arr, howMany) {
	// it doesn't always pay to be first
	while (howMany > 0) {
		arr = arr.slice(1);
		howMany--;
	}
	return arr;

}

slasher([1, 2, 3], 2);