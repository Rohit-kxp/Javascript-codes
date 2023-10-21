// stack (all primtive data types) and  Heap( All non primitive data types);


let myname = "Rohit kashyap"
let yourname= myname   
yourname = "Its meeeeee" 
console.log(yourname);
console.log(myname);


// 
let userOne={
    email: "userOne@google.com",
    upi : "userOne@ybl"
}
let userTwo=  userOne
userTwo.email = "rohit@google.com"
console.log(userOne.email);
console.log(userTwo.email);
console.log(userTwo);
console.log(userOne);