function pairElement(str) {
  var pairs = [];
  
  for (var i = 0; i < str.length; i++) {
    var tempArr = [];
    tempArr.push(str.charAt(i));
    
    switch(str.charAt(i)) {
      case 'G':
        tempArr.push('C');
        break;
      case 'C':
        tempArr.push('G');
        break;
      case 'A':
        tempArr.push('T');
        break;
      case 'T':
        tempArr.push('A');
        break;
    }
    pairs.push(tempArr);
  }
  return pairs;
}

pairElement("ATCGA");
