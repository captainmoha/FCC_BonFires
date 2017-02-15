
function rot13(str) { // LBH QVQ VG!
  outStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) <= 'Z'.charCodeAt(0) && str.charCodeAt(i) >= 'A'.charCodeAt(0)) {
      var code = (str.charCodeAt(i) - 13);
      var charNum = code - 65; 
      var decoded = (code < 65) ? 'Z'.charCodeAt(0) + 1 + charNum : code;
      
      console.log(str.charCodeAt(i));
      console.log(code + " " + String.fromCharCode(decoded));
      
      outStr += String.fromCharCode(decoded);
    }
    
    else {
      outStr += str[i];
    }
  }
  return outStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
