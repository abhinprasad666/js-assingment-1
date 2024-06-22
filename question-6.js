// question -6
// Write a script that takes a user's age and checks if they are a child (0-12),
//  teenager (13-19), adult (20-59), or senior (60 and above).

// NPM module is used in this project


let read=require("readline-sync")
let age=Number(read.question('Enter Your Age:'))

if(12>=age){
    console.log('You Are Child')
}
else if(19>=age){
    console.log('You Are Teenager')
}
// 
else if(59>=age){
    console.log('You Are Adult')
}
// 
else if(60>=age || 110>=age){
    console.log('You Are Senior')
}
else{
    console.log("Invalid Key")
}


