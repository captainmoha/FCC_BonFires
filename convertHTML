
function convertHTML(str) {
  var outStr = '';
  
  for (var i in str) {
    switch(str[i]) {
      case '<':
        outStr += "&lt;";
        break;
        
      case '>':
        outStr += "&gt;";
        break;
        
      case '\'':
        outStr += "&apos;";
        break;
        
      case '"':
        outStr += "&quot;";
        break;
        
      case '&':
        outStr += "&amp;";
        break;
        
      default:
        outStr += str[i];
    }
    console.log(i);
  }
  return outStr;
}

convertHTML("Dolce & G<abbana");
