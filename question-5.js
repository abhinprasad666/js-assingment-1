// question -5
// Implement a program that checks if a user's entered number is positive, negative, or zero.

let read=require("readline-sync")
let num=Number(read.question('Enter Number'))

if(0<num){
    console.log('Number Is Positive')
}
else if(0>num){
    console.log('Number Is Negative')
}
else if(0===num){
    console.log("Number Is Zero")
}
else{
    console.log('Invalid Key')
}

