/**
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
**/
function truthCheck(collection, pre) {
    let keys=[]
    let values=[]
    for(let i=0;i<collection.length;i++){
      if(pre in collection[i]){
        keys.push(i)
      }
    }
    if(keys.length!==collection.length){
      return false
    }else{
      for(let j=0;j<collection.length;j++){
        values.push(collection[j][pre])
      }
    if(!values.some(t => !t)==true){
      return true
    }else{
      return false
    }
    }
    //let p=pre in collection[2]
    //return values;
  }
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  