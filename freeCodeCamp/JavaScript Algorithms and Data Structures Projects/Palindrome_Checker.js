/**
 * Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
 */

function palindrome(str) {
    //removing all the special characters
    let new_str2=str.replace(/[^a-zA-Z0-9]/g, '');
    let neww="";
    //reversing the given string 
    for(let i=new_str2.length-1;i>=0;i--){
      neww=neww.concat(new_str2.slice(i,i+1));
    }
    //converting to lowercase and removing spaces
    let neww2=neww.toLowerCase();
    let neww3=neww2.replace(/\s/g,'');
    let str2=new_str2.toLowerCase();
    let str3=str2.replace(/\s/g,'');
    //checking if the two strings are same or not
      if(str3===neww3){
      return true;
    }else{
      return false;
    }

}

palindrome("eye");
