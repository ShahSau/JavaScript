/**
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
 */

function uniteUnique(arr) {
    let a=[...arguments]
    let m=[]
  for(let i=0;i<a.length;i++){
    for(let n=0;n<a[i].length;n++){
      if(!m.includes(a[i][n])){
        m.push(a[i][n])
      }
    }
  }
  return m
  }