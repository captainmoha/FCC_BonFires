
function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.filter(function (val) {
    return arr2.indexOf(val) == -1;
  });
  
  tempArr = arr2.filter(function (val) {
    return arr1.indexOf(val) == -1;
  });
  
  return newArr.concat(tempArr);
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
