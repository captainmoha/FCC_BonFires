function palindrome(str) {
	// Good luck!
	var re = /(\W*)/g;
	str = str.replace(re, '').toLowerCase();
	newStr = str.split('').reverse().join('')
		//console.log(str);
		//console.log(newStr);

	if (str === newStr) {
		return true;
	} else {
		return false;
	}
}



palindrome("a jan a plan. a canal panama");