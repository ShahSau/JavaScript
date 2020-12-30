/**
 * Flatten a nested array. You must account for varying levels of nesting.
 */
function steamrollArray(arr) {
    let new_arr=[]
   var flatten = function(arg) {
      if (!Array.isArray(arg)) {
        new_arr.push(arg);
      } else {
        for (let i in arg) {
          flatten(arg[i]);
        }
      }
    };

    arr.forEach(flatten);
    return new_arr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
  