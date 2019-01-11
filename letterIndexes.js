function letterIndex(string) {
// create a object as result
var letterIndex = {};
string = string.replace(/\s/g, '');

//for loop the input string

  for (i = 0; i < string.length; i++) {
      //add the index of the char to the related key of the object

    var key = string[i]
    if (letterIndex[key]==undefined) {
        letterIndex[key] = [i]
      }
    else {
      //console.log(typeof(letterIndex[key]))
      letterIndex[key].push(i)
    }
  }
  console.log(letterIndex)

}

letterIndex("lighthouse in the house")