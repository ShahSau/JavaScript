/**
 * 
 * You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
 */



function frankenSplice(arr1, arr2, n) {
    let copy_arr2=[...arr2]
    let arr3= copy_arr2.slice(0,n);
    copy_arr2.splice(0, n);
    let arr4=[...arr1]
    for(let i=arr3.length-1;i>=0;i--){
      arr4.unshift(arr3[i]);
    }
    for(let j=0;j<copy_arr2.length;j++){
      arr4.push(copy_arr2[j])
    }
  
    //let arr4=[...arr1]
   // let final=arr4.unshift(arr3);
    return arr4;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);