
function truthCheck(collection, pre) {
    // Is everyone being true?

    for (var i in collection) {
        var obj = collection[i];
        console.log(obj);
        // if it's false eject.
    	if (!obj[pre])
            return false;
    }
    return true;
}

var x = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
console.log(x);
var y = truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
console.log(y);


