/*Return true if the string in the first element of the array contains all of the letters of the string
in the second element of the array.*/

function mutation(arr) {
	// ignore case
	firstString = arr[0].toLowerCase();
	secondString = arr[1].toLowerCase();
	// if any of the letters of the second string is not present in the first return false
	for (var i = 0; i < secondString.length; i++) {
		if (firstString.indexOf(secondString[i]) === -1) {
			return false;
		}
	}
	return true;
}

mutation(['hello', 'hey']);