//  primitive :-  all primitive datatypes are call by value :- 
// 7 types :- string , number , boolean , null , undefined , symbol ,BigInt


// const score = 100
// const scorevalue = 100.3
// console.log(typeof scorevalue);

// const isloggenIn = false
// const outsidetemp  =  null
// console.log(typeof outsidetemp);

// let userEmail ;
// console.log(typeof userEmail);

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);
// console.log(id == anotherId);

// const bigNumber = 4534563643645464646n
// console.log(typeof bigNumber);



// reference type  ( non Primitive data types)call by reference
// Array , Objects , functions 

const heros = [ "shaktiman ", "naagraj", "doga"] // saare non primitive datatypes ka type fucntion ata h //
let myobject = {
    name : "Rohit",
    age : 20,
}

const myfunction = function(){ //  function ka datatype hamesha object function ata h
    console.log("hello world");
}
console.log(typeof myfunction);
console.log(typeof myobject)