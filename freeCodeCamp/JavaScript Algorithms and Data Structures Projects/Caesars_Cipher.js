/**
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) {
    let str_escape=[]
    let str_no = str.replace(/[^\w]/gi, '');
    let str2=" "
    var alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for(let i=0;i<str_no.length;i++){
      if( str_no[i] >= 'a' && str_no[i] <= 'z' || str_no[i] >= 'A' && str_no[i] <= 'Z'){
        let position = alpha.indexOf(str_no[i]);
        let k= parseInt(position)+13
        if(k>=26){
         let k3=k-26;
         let k22=alpha[k3]
         let k222=k22.toString()
         str2+=k222
        }else if (k<26){
         let k2=alpha[k]
         let k4=k2.toString()
          str2+=k4
        }
      }
  
    }
  str2=str2.trim()
  let indices = [];
  for(var idx = 0; idx < str.length; idx++) {
  if (str[idx] === " ") indices.push(idx); 
  }
  let origString = str2.split('');
  for(let j=0;j<indices.length;j++){
    origString.splice(indices[j], 0, ' ');
  }
  let final_string=origString.join('');
  //return final_string;
  
  if( str.slice(-1)==='!'|str.slice(-1)=='.' |str.slice(-1)=='?'|str.slice(-1)==';'){
    return final_string.concat(str.slice(-1));
  }else{
    return final_string;
  }
  
  }
  rot13("SERR PBQR PNZC");
  