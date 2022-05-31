// Prime Numbers
// A prime number is a natural number greater than 1, 
// which is only divisible by 1 and itself. 
// First few prime numbers are : 2 3 5 7 11 13 17 19 23 …..
// a number that can be divided exactly only by itself and 1,
//  for example 7, 17 and 41


// function isPrime(num_arr){


// for(let i = 0;i<num_arr.length-1;i++){
//     if(num_arr[i] < 0){
//         console.log('this is negative number')
//     }
//     if(num_arr[i] % 1 == 0 && num_arr[i] % num_arr[i] === 0 ){
//          console.log(true)
//     } 
//     else{
//          console.log(false)
//     }
// }

// }

// isPrime([-2, 3, 5, 7, 11, 13, 17, 19, 23,41 ])



// Find a digit at a specific place in a number
// Problem: 
// Given a positive integer N and a digit D.
//  The task is to find out the place value of a digit D in the given number N. 
//  If multiple occurrences of digit occur then find the minimum place value.

// Input: N = 3928, D = 3 
// Output: 3000 
// Explaination: 
// Place value of 3 in this number is 3*1000 = 3000
// Input: N = 67849, D = 6 
// Output: 60000 

//steps
//  
// TODO: not understood
// function findDigit(N,num){
//     var total = 1,
//     value = 0,
//     rem = 0;
//   while (true) {
//     rem = N % 10;
//     N = parseInt(N / 10);

//     if (rem == num) {
//       value = total * rem;
//       break;
//     }
//     total = total * 10;
//   }
//   return console.log(value);;
// }

// findDigit(5,85932)


// Find the count of digits in a number

// ex. 1234  -  4digits
// 234 - 3 digits

// function findCount(digit){
//  let digitArr=digit.toString().split("")
//  console.log(digitArr);
//  return digitArr.length
// }

// console.log(findCount(2345));


// Find the largest digit
//  ex .1234 - 4

// function findLargest(digit){
//    let digitArr= digit.toString().split("")
//    for(let i=0;i < digitArr.length ;i++){
//      if(digitArr[i] > digitArr[i+1]){
//         digitArr.splice(digitArr.indexOf(digitArr[i + 1]),1,digitArr[i])
//      } 
//    }
//     return digitArr[digitArr.length -1]
// }

// console.log(findLargest(321));


// Find the 2nd largest digit
