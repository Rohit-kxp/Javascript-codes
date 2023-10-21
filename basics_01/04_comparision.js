// console.log( 2 < 1 );
// console.log( 2 > 1 );
// console.log( 2 >+ 1 );
// console.log( 2 >= 1 );
// console.log( 2 <= 1 );
// console.log( 2 >- 1 );
// console.log( 2 >> 1 );
// console.log( 2 << 1 );
// console.log( 2 == 1 );
// console.log( 2 != 1 );

// console.log("2" > 1);
// console.log("02" > 1); // javascript automatically convert string to the number for comparision

/* ******************************************************************************************************** 
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0 );

//the reason is that equality check == and comparision > , < , >= , =< works differently
//comparision convert null to a number , treating it as 0 
//that's why (3) null >= 0 gives true and (1) null <=0 gives false


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0 );
console.log(undefined > 0);
console.log(undefined== 0);
console.log(undefined >= 0 );
console.log(undefined > 0 );
console.log(undefined < 0 );
// undefined always gives false in comparision


*/

// // // // // // // // // please try to avoid comparsion like above once , it create many confusion for other programmers and for self too // // // // 





// === used for strict check. this === checks the value and data types at the same time

console.log( " 2 " == 2  ); // this gives true becuase it only checks value but
console.log(" 2 " === 2 ); // this gives false because in this case it also check the data types , which is not same in this case