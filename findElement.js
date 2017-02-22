
function findElement(arr, func) {
  var passesTest = arr.filter(func);
  console.log(passesTest);

  return passesTest[0];
}

var x = findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
console.log(x);
