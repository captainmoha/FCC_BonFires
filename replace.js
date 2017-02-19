function myReplace(str, before, after) {
	// preserve case
	var afterStr = (before[0].toUpperCase() == before[0]) ? after[0].toUpperCase() + after.slice(1): after;
	console.log(afterStr);
	return str.replace(before, afterStr);
}

var x = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
var x = myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
console.log(x);