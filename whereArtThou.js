// Make a function that looks through a list (first argument) and returns an array of all objects
// that have equivalent property values (second argument).
function where(collection, source) {
	// What's in a name?
	var arr = [];
	// first loop go through the objects in the array
	for (var i = 0; i < collection.length; i++) {
		var currentObj = collection[i];
		var keys = Object.keys(currentObj);

		// go through properties(keys) in each object
		for (var j = 0; j < keys.length; j++) {
			// value of current key(property)
			var val = currentObj[keys[j]];
			
			// if the value in the current key is the value in the source object
			if (val === source[keys[j]]) {
				arr.push(currentObj);
			}
		}
	}
	return arr;
}

function where(collection, source) {
    var arr = [];
    // What's in a name?

    for (i = 0; i < collection.length; i++) {
        for (var prop in collection[i]){
            if (collection[i][prop] === source[Object.keys(source)]) {
                arr.push(collection[i]);
            }
        }
    }
    return arr;
}


// functional version

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var sourceKeys = Object.keys(source);
  
  // Only change code below this line
  arr = collection.filter(function (val) {
    console.log(sourceKeys);
    var areValuesEqual = true;
    for (var i in sourceKeys) {
      var key = sourceKeys[i];
      
      if (!(val.hasOwnProperty(key) && val[key] == source[key])) {
        areValuesEqual = false;
        break;
      }
    }
    return areValuesEqual;
  });
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
where([{
	first: 'Romeo',
	last: 'Montague'
}, {
	first: 'Mercutio',
	last: null
}, {
	first: 'Tybalt',
	last: 'Capulet'
}], {
	last: 'Capulet'
});
where([{
	'a': 1
}, {
	'a': 1
}, {
	'a': 1,
	'b': 2
}], {
	'a': 1
});
