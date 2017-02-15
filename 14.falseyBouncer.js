/*Remove all falsey values from an array.
Falsey values in javascript are false, null, 0, "", undefined, and NaN.*/

// solution using a new created array
function bouncer(arr) {
	// Don't show a false ID to this bouncer.
	var result = [];
	for (i = 0; i < arr.length; i++) {
		if (Boolean(arr[i])) {
			result.push(arr[i]);
		}
	}
	return result;
}
// second solution using filter which takes a function and applies it to every elt in the arr
// and returns a new arr
function bouncer2(arr) {
	return arr.filter(Boolean);
}
bouncer([7, 'ate', '', false, 9]);