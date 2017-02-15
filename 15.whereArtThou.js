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
function where(collection, source) {
    return collection.filter(function (obj) {
        return obj[Object.keys(source)] === source[Object.keys(source)];
    });
}
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