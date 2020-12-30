/**
 * Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */
function dropElements(arr, func) {
    var a=[]
    arr.forEach((i)=>{
      if(func(i)==true){
        a.push(i)
      }else{
        return a
      }
    })
    if(a.length!=0){
    var n = arr.indexOf(a[0]);
    var arr_new=arr.slice(n,arr.length)
    return arr_new
  }else{
    return a
  }
  }
  dropElements([1, 2, 3], function(n) {return n < 3; });
  