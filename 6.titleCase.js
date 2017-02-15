function titleCase(str) {
	var newWord;
	var newList=[];
	var newString;
	wordList = str.toLowerCase().split(" ");
	for (var word in wordList) {
		var firstLetter = wordList[word].charAt(0).toUpperCase();
		var slicedWord =  wordList[word].slice(1);
		newWord = firstLetter.concat(slicedWord);
		newList.push(newWord);

	}	
	return newList.join(" ");
}



console.log(titleCase("I'm a little tea pot"));
// functional programming solution
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};