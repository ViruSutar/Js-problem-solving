
//#1 reverse a string
// return a string in reverse
// ex reverseString('hello') === 'olleh'

//key points -
// 

//convert str to arr
// apply for loop on it in a reverse way
// store that in some variable 
// convert array into string
function reverseString(str){
if(typeof str !== 'string'){
    return console.log("This is not string");
}
 let strArr= str.split("")
 let reveseArr=[];
 for(let i=strArr.length -1;i>=0;i--){
   reveseArr.push(strArr[i])
 }
 
return console.log(reveseArr.join(""))

}

reverseString('viraj')