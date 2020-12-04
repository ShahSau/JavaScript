/**
 * Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
    let string=""
    var vowel=['a','e','i','o','u']
    var k=vowel.includes(str[0])
    if(k===true){
      string = str.concat('way')
      return string;
    }else{
      let p=[]
      for (var i = 0; i < str.length; i++) {
        var idx = vowel.includes(str[i]);
        if(idx === true) {
          p.push(i);
        }else{
          continue
        }
      }
      if(p.length!=0){
      let a=str.slice(0,p[0])
      let str2=str.replace(a,'')
      let final_str=str2.concat(a)
      string=final_str+'ay'
       //alert(str.charAt(i));
      return string;
      }else{
        return str.concat('ay')
      }
    }
  
  }
  
  translatePigLatin("consonant");
  