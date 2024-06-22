// question -8
// Write a program to find the sum of all the odd numbers for a given limit (if you choose limit as 10 then
//  need to find the sum of all odd numbers in between 1 and 10 )
let read =require('readline-sync')

let limit=Number(read.question("Enter limit:"))

let sum=0;

for(let i=0;i<=limit;i++){

    sum=sum+i;
    

}
console.log('Result is:'+sum)