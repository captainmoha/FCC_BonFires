function findLongestWord(str) {
	var maxLength = 0;
	var longestWord = '';
	strList = str.split(' ');
	for (var i = 0; i < strList.length; i++) {
		var currentLength = strList[i].length;
		if (currentLength >= maxLength) {
			maxLength = currentLength;
			longestWord = strList[i];
		}
	}
	return longestWord;
}

findLongestWord('The quick brown fox jumped over the lazy dog');