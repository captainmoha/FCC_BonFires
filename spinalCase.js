
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  // replace spaces and underscores with dashes
  str = str.replace(/[_ ]/g, '-');
  
  // titlecase all words
  str = str.replace(/\b[a-z]/g, function (letter) {
    return letter.toUpperCase();
  });
  
  console.log(str);
  // this is to match words that are not seperated by anything but are titlecased
  var re = /([A-Z][a-z]+)/g;
  var words = str.match(re);
  
  console.log(words);
  
  // seperate everything with a dash as required
  var res = words.join('-');
  console.log(res);
  
  return res.toLowerCase();
}

spinalCase('thisIsSpinalTap');
spinalCase('Teletubbies say Eh-oh');

