function charCount(str){
    let str2= str.replace(/ /g,'')
    str2=str2.toLowerCase();
    var ob = {};
    for(let i=0; i< str2.length; i++){
      if(str2[i] in ob){
        ob[str2[i]]++
      }else{
          ob[str2[i]] = 1
      }
    }
    return ob
  }
  
  
  charCount('Your phone number is 1234567')