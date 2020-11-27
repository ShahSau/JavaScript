/**
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 */

function titleCase(str) {
    let s4=[]
    let str2= str.toLowerCase();
    let s3=str2.split(" ");
    for(let i=0;i<s3.length;i++){
      s4.push(s3[i][0].toUpperCase()+s3[i].slice(1));
    }
    return s4.join(" ");
  }
  
  titleCase("I'm a little tea pot");