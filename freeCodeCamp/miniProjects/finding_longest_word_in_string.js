/**
 * this os for the length of the word
 */

function findLongestWordLength(str) {
    let k=1;
    let s=str.split(" ");
    for(let i=0;i<s.length;i++){
      if( s[i].length>k){
        k=s[i].length
      }else{
        k=k;
      }
    }
    return k;
    
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  /**
   * the following code is for the word itself.
   */
  function findLongestWordLength(str) {
    let k=1;
    let m=[];
    s=str.split(" ");
    for(let i=0;i<s.length;i++){
      if( s[i].length>k){
        k=s[i].length
      }else{
        k=k;
      }
    }
    for(let i=0;i<s.length;i++){
      if( s[i].length===k){
        m.push(s[i])
      }
    }
    return m;
    
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");