
function uniteUnique(arr) {
  var args = Array.from(arguments);
  var uniqueArr = [];
  
  for (var i = 0; i < args.length; i++) {
    var currArr = args[i];
    
    for (var j = 0; j < currArr.length; j++) {
      if (uniqueArr.indexOf(currArr[j]) == -1) {
        uniqueArr.push(currArr[j]);
      }
    }
  }
  
  return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
