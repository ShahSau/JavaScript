/**
 * A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */

function sumPrimes(num) {
    let am=[]
    let ma=[]
    let sum=0
    let newArr = [];
    if(num==1){
      return 1
    }else if(num==2){
      return 2
    }else{
      for(let i=2;i<=num;i++){
          am.push(i)
      }
      am.forEach((k)=>{
          for(let j=2;j<k;j++){
            if(k%j==0){
              ma.push(k)
            }
          }
      })
      let ma2=[...new Set(ma)]
    
      for(let i=0;i<am.length;i++){
        var k=ma2.includes(am[i])
        if(k===false){
          newArr.push(am[i])
          }
        }
      newArr.forEach((item)=>{
      sum=sum+item;
    })
  
  
    return sum;
  }
  }
  
  sumPrimes(10);
  