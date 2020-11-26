/**
 * Return an array consisting of the largest number from each provided sub-array. 
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 * 
 */



function largestOfFour(arr) {
    let m=[];
   
    for(let i=0;i<arr.length;i++){
      let a=-10000000;
      for(let j=0;j<arr[i].length;j++){
        //a=0;
        if(a<=arr[i][j]){
          a=arr[i][j];
        }else{
          a=a;
        }
  
      }m.push(a)
    }
    return m;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  