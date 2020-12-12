/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */
let new2=[]
function chunkArrayInGroups(arr, size) {
  let after = arr.splice(0,size);
  new2.push(after)
  if(arr.length<=size){
    new2.push(arr)

  }else{
    chunkArrayInGroups(arr, size) 
  }
    return new2
}


chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)