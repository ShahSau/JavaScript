/**
 * Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */
function fearNotLetter(str) {
    let alpha="abcdefghijklmnopqrstuvwxyz"
    if(str.length==26){
      return undefined;
    }else{
      var new_arr=[]
      let first=str[0]
      let last=str[str.length-1]
      let first_index=alpha.indexOf(first)
      let last_index=alpha.indexOf(last)
      let sliced_str=alpha.slice(first_index,last_index+1)
      for(let i=0;i<sliced_str.length;i++){
        let k=str.includes(sliced_str[i])
        if(k==false){
          new_arr.push(sliced_str[i])
        }
      }
      let new_str=new_arr.toString()
      return new_str
    }
  }
  fearNotLetter("abce");
  