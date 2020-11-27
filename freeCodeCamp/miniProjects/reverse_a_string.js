
/**
 * 
 *Reverse the provided string
 */

function reverseString(str) {
    let neww="";
    for(let i=str.length-1;i>=0;i--){
      neww=neww.concat(str.slice(i,i+1));
  
    }
    return neww;
  }
  
  reverseString("hello");