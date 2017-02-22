
function dropElements(arr, func) {
	// Drop them elements.
  	var resultArr = [];
  	resultArr = resultArr.concat(arr);

  	
	for (var i in arr) {

		if (func(arr[i])) {
			break;
		}
    	else {
    		// keep removing elements from the begining until func returns true
    		resultArr.shift();
		}
	}
  
	return resultArr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
