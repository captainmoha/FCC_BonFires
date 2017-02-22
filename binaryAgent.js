function binaryAgent(str) {

    /*
        converts a string of chars represented in binary to english words
    */

    var binaryChars = str.split(' ');

    var chars = binaryChars.map(function(val) {
        return String.fromCharCode(intFromBinary(val));
    });

    var words = chars.join('');

    return words;
    
}

function intFromBinary(binary) {

    /*
        converts a binary number to decimal
    */

    var arr = binary.split('').reverse();
    var num = 0;

    for (var i in arr) {
        if (arr[i] === '1') {
            num += Math.pow(2, i);
        }
    }
    return num;

}


var w = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

console.log(w);