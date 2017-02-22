
function translatePigLatin(str) {
	
	
	if (str.length < 2) {
		return str;
	}

	var pigStr = '';
	// starts with single consonant
	if (!isVowel(str[0]) && isVowel(str[1])) {
		pigStr = str[1] + str.slice(2) + str[0] + 'ay';
		console.log('1');
	}

	// starts with a cluster
	else if (!isVowel(str[0]) && !isVowel(str[1])) {
		pigStr = str.slice(2) + str[0] + str[1] + 'ay';
		console.log('2');
	}

	// starts with a vowel
	else if (isVowel(str[0])) {
		pigStr = str + 'way';
		console.log('3');
	}

	return pigStr;
}

function isVowel(chr) {
	console.log(chr);
	return (chr == 'a' || chr == 'i' || chr == 'o' || chr == 'u' || chr == 'y' || chr == 'e');
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
