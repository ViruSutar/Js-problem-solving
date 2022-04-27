
//#1 reverse a string
// return a string in reverse
// ex reverseString('hello') === 'olleh'

//key points -
// 

//convert str to arr
// apply for loop on it in a reverse way
// store that in some variable 
// convert array into string
// function reverseString(str){
// if(typeof str !== 'string'){
//     return console.log("This is not string");
// }
//  let strArr= str.split("")
//  let reveseArr=[];
//  for(let i=strArr.length -1;i>=0;i--){
//    reveseArr.push(strArr[i])
//  }
 
// return console.log(reveseArr.join(""))
// }

// reverseString('viraj')

// #2 validate a palindrome
// A string is called a palindrome string if the reverse of that string is the same as the original string.
// return true if palindrome and false if not 
// ex. isPalindrome(/)

// take string 
// make it reverse if it is same then bam 

// TODO: check for another approach use steps of udemy course

function isPalindrome(str){
  let newArr=str.split('')
  let reverseArr=[]
  for(let i=newArr.length - 1;i>=0;i--){
     reverseArr.push(newArr[i])
  }
  if(reverseArr.join("") === str){
    return console.log(true)
  }
 return console.log(false)
}

isPalindrome('level')