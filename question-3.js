// question -3

// Create a program that asks the user for their age and determines
// if they are eligible to vote (considering a voting age of 18).


let read=require("readline-sync")

let age=Number(read.question('Please Enter Your Age:'))

if(18<=age){
    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligible to vote") 
}