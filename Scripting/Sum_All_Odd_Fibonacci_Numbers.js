/**
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 */

function sumFibs(num) {
    let sum=0;
    if(num===1){
      return 1
    }else{
    let am =[1,1]
    for(let i=2;i<=num;i++){
      let k=am[i-1]+am[i-2]
      am.push(k)
    }
    am.pop();
    let arr=[]
    let ma=[]
  
    //return am
  for(let i=0;i<am.length;i++){
    if(am[i]<=num){
    arr.push(am[i])
      }
    }
  //return arr
  for(let i=0;i<arr.length;i++){
      if(arr[i]%2!=0){
        ma.push(arr[i])
      }
    }
  ma.forEach((item)=>{
    sum=sum+item;
  })
  return sum
  }
  
  }
  
  sumFibs(4);
  