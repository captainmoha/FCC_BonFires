
function convertToRoman(num) {
  var romanNum = [];
  
  var table = {
	1: 'I',
	2: 'II',
	3: 'III',
	4: 'IV',
	5: 'V',
	6: 'VI',
	7: 'VII',
	8: 'VIII',
	9: 'IX',
	10: 'X',
	20: 'XX',
	30: 'XXX',
	40: 'XL',
	50: 'L',
	60: 'LX',
	70: 'LXX',
	80: 'LXXX',
	90: 'XC',
	100: 'C',
	200: 'CC',
	300: 'CCC',
	400: 'CD',
	500: 'D',
	600: 'DC',
	700: 'DCC',
	800: 'DCCC',
	900: 'CM',
	1000: 'M'
  };

  numStr = num.toString().split('').reverse().join('');
  console.log(numStr);
  for (var i = 0; i < numStr.length; i++) {
    var digit = numStr[i];
    var symbol = '';

    switch(i) {
      case 0:
      	symbol = table[digit];
        break;
      case 1:
      	symbol = table[digit*10];
        break;
      case 2:
      	symbol = table[digit*100];
        break;
      case 3:
        // repeat M(1000) digit times
      	for (var j = 0; j < digit; j++) {
      	  symbol +=  table[1000];
      	}
        
        break;
    }

    romanNum.push(symbol);
  }
  
  // reverse the arrays because we started converting from 1s place to bigger places
  var romanStr = romanNum.reverse().join('');
  return romanStr;
}

convertToRoman(2014);
