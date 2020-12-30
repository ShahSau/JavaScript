/**
 * Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
 */
function bouncer(arr) {
    let final=[];
    for(let i=0;i<arr.length;i++){
      if(Boolean(arr[i])===true){
        final.push(arr[i])
      }
    }
    return final;
  }
  
  bouncer([7, "ate", "", false, 9]);
  