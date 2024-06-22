// question - 1
// Create a program that asks the user for two numbers and prints their sum.


let read=require('readline-sync');
let choice=Number(read.question('1 For Addition\n2 For Subtraction\n3 For Multiplication\n4 For Division\nChoice:'))

let result;

if((choice===1)||(choice===2)||(choice===3)||(choice===4)){
   let num1=Number(read.question('Enter two numbers:'))
let num2=Number(read.question(''))


if(choice===1){


   result=num1+num2
   console.log("Result is:"+result)
}
else if(choice===2){
    result=num1-num2
    console.log("Result is:"+result)
}
else if(choice===3){
    result=num1*num2
    console.log("Result is:"+result)
}
else if(choice===4){
    result=num1/num2
    console.log("Result is:"+result)
}
}
else{
   console.log("invalid number")
}





