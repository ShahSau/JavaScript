/**
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it.
 For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
 */
function myReplace(str, before, after) {
    if(before[0]==before[0].toUpperCase()){
      var ne = after.slice(0,1);
      let me=ne.toUpperCase()
      let af=after.slice(1,after.length)
      let after2= me.concat(af)
      let str3=str.replace(before,after2)
      return str3
    }else{
      var ne = after.slice(0,1);
      let me=ne.toLowerCase()
      let af=after.slice(1,after.length)
      let after2= me.concat(af)
      let str3=str.replace(before,after2)
      return str3
    }
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  