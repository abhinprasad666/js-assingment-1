// Question -4
// Write a script that takes a user's grade as input and outputs whether they passed or 
// failed (assuming the passing grade is 60 or above).


let read=require('readline-sync')

let mark=Number(read.question('Enter Your Mark:'))

// 
if(101>mark || 0>mark){
    console.log("invalid mark")
  
   
// grade A+
if(90<=mark){
    console.log('you are pass\ngrade: A+ ')
}
// A
else if(80<=mark || 89<=mark){
    console.log('you are pass\ngrade: A ')
}
// B+
else if(70<=mark || 79<=mark){
    console.log('you are pass\ngrade: B+ ')
}
// B
else if(60<=mark || 69<=mark){
    console.log('you are pass\ngrade: B ')
}
// C+
else if(50<=mark || 59<=mark){
    console.log('you are pass\ngrade: C+ ')
}
// C
else if(40<=mark || 49<=mark){
    console.log('you are pass\ngrade: C ')
}

// D+
else if(30<=mark || 39<=mark){
    console.log('you are pass\ngrade: D+ ')
}
// faild mark
else if(29>=mark && 0<=mark ){
    console.log('you are faild ')
}
//

}

else{
   
    console.log('invalid mark ')
}