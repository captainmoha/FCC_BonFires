function smallestCommons(arr) {
    /*
        Good solution using a math formula
    */
    // we assume the range is in form [min:max] so we sort
    arr.sort();

    var minCommon = 1;

    for (var i = arr[0]; i <= arr[1]; i++) {
        minCommon = lcm(i, minCommon);
    }
    

    return minCommon;
}

function gcd(a, b) {
    /*
        Calculates greatest common divisor between a and b
    */

    if (b === 0)
        return a;
    else
        return gcd(b, a%b);
}

function lcm(a, b) {
    /*
    Calculates least common multiple based on formula
    https://en.wikipedia.org/wiki/Least_common_multiple#Computing_the_least_common_multiple
    */

    return (a * b) / gcd(a, b);
}

//////////////////////////////////////////////////////////////////////////////

function stupidSmallestCommons(arr) {
    /*
        This is a very slow brute-force solution
    */
  
    // we assume the range is in form [min:max] so we sort
    arr.sort();
  
    var smallest = 1;
    var hi = arr[1];
    var lo = arr[0];
    var isCommon = true;
    var notFound = true;
    var multiple = 1;
  
    while (notFound) {

        multiple += 1;
        console.log(multiple);
        isCommon = true;
      
        for (var j = lo; j <= hi; j++) {
            if (multiple%j !== 0) {
                isCommon = false;
                break;
            }
        }

        if (isCommon) {
            smallest = multiple;
            notFound = false;
        }
    }

    return smallest;
}

console.log(smallestCommons([23,18]));

console.log(smallestCommons([1,13]));
