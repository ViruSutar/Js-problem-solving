
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

// function isPalindrome(str){
//   let newArr=str.split('').reverse().join("")
//   // let reverseArr=[]
//   // for(let i=newArr.length - 1;i>=0;i--){
//   //    reverseArr.push(newArr[i])
//   // }
//   // if(reverseArr.join("") === str){
//   //   return console.log(true)
//   // }
//  return console.log(newArr === str)
// }

// isPalindrome('level')


// function reverseInt(int){
//   const revString=int.toString().split('').reverse().join("")
  
//   return console.log(parseInt(revString));
// }

// reverseInt(1234)


//#4 capitalize letters
// return a string with first letter of every word capitalized 
// ex. capitalizeLetter('i love js') === 'I Love Js'
// function capitalizeLetters(str){
// const strArr=str.toLowerCase().split(' ')

// for(let i=0; i < strArr.length;i++){
//     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1)
// } 

// return console.log(strArr.join(' '));

// return str.toLowerCase().split(' ').map(data=>{
//     return data[0].toUpperCase() + data.substring(1)
// }).join(" ")
// }

// console.log(capitalizeLetters("i love js"));

// #5 Max character 
// return the character that is most common in a string
// maxCharacter('javascript') === 'a'

// key points return max chars
// what imp goal - just return chars
// steps to solve problem - 
// store string in object as a key value pair where value will be how many time that value is been repeated
// then get the maximum value from object 
//  

// function maxCharacter(str){
//    const charMap={};
//    let maxNum=0
//    let maxChar=''
//    str.split('').forEach(element => {
//      if(charMap[element]){
//       charMap[element]++
//      }
//      else{
//        charMap[element] = 1
//      }
//    })

//    for(const char in charMap){
//       if(charMap[char] > maxNum){
//         maxNum = charMap[char]
//         maxChar = char
//       }
//    }

//    return maxChar
// }


// console.log(maxCharacter('jaaavassssssssssssscript'));

//#6 fizzBuzz
// write a program that prints all the numbers from 1 to 100 for multiples of 3 instead of the number
// print "Fizz" for multiples of 5 print "Buzz" . for numbers which are multiples of both 3 and 5 print "FizzBuzz"


//first print 1 to 100 numbers
// using for loop
// use one variable to print number s
// use if conditions to print multiples of 3
// else if for multiples of 5 
// else to print number
// function fizzBuzz(){
  
  // for(let i=1;i<=100;i++){
  //   if(i%15==0){
  //     console.log("FizzBuzz");
  //   }
  //   else if(i%3==0){
  //     console.log("Fizz");

  //   }
  //   else if(i % 5 == 0){
  //     console.log( "Buzz");
  //   }
  //   else{
  //   console.log(i);
  //   }
  // }
  // return 

  //without modulo operator
  // let c3=0
  // let c5=0
  // for(let i=1;i<100;i++){
  //   c3++;
  //   c5++;
  //   let d=""
  //   if(c3 == 3){
  //     d+="fizz"; c3=0
  //   }

  //   if(c5 == 5){
  //     d+="buzz"; c5 = 0
  //   }

  //   if(d == ""){
  //     console.log(i);
  //   }else{
  //       console.log(d);
  //   }
  // }
// }

// console.log(fizzBuzz());


// #7 longest word
// return longest word of a string
// if more than one longest word,put into an array
//ex.longestWord('Hello,my name is Brad') === 'hello'
// ex. longestWord('Hello there ,my name is Brad') === ['hello','there']

//questions 
// what if two words in the string of same length ->> put them in array and return
// should i check for type of arg

//steps
// use split and store in array word by word
// count every 
// function longestWord(str){
//   let maxChar=0
//   let longestStr;
//   let longestStrArr=[]
  
//   str.split(',').forEach(element=>{
   
//   })
//  return  longestStr
// }

// console.log(longestWord('vi,viraj,sutasssssr'));