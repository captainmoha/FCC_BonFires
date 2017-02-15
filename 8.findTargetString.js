function end(str, target) {
	// "Never give up and good luck will find you."
	// -- Falcor
	// Check if a string (first argument) ends with the given target string (second argument).
	var strEnd;
	console.log(str.length);
	console.log(target.length);
	strEnd = str.substr(str.length - target.length);
	console.log(strEnd);
	if (strEnd === target) {
		return true;
	} else {
		return false;
	}
	return strEnd;
}