// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators



// Arithmetic Operator	
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement


// var value1 = 6;
// var value2 = 5;
// output=value1%value2
// console.log(value1++) // Use and increment
// console.log(value1)

// console.log(++value1) // increment and use
// console.log(value1++)
// console.log(value1)



// Assignment Operators

// =	
// +=	
// -=	
// *=	
// /=	
// %=	
// **=


// var a = 10;
// a %= a
// var b = a
// console.log(b);




// Comparison Operators
// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to



// const password = "123";
// confirmPassword = 123;

// console.log(typeof password, password)
// console.log(typeof confirmPassword, confirmPassword)

// console.log(confirmPassword!==password)


// var Hindi = 60;

// if (Hindi<=60) {
// 	console.log("Pass");
// }else{
// 	console.log("Fail");
// }


// let panCard = prompt("Enter Pan card status Y/N");
// let OpeningBalance = +prompt("Enter Opening Balance");
// let AdharCard = prompt("Enter adhar card status Y/N");
// let IDProof = prompt("Enter IDProof status Y/N");
// let Passport = prompt("Enter Passport status Y/N");


// let result = (panCard == "Y" && OpeningBalance >= 1000 && (AdharCard == "Y" || IDProof == "Y" || Passport == "Y"))

// if (result) {
// 	console.log("Open")
// }else{
// 	console.log("Doc Pending")
// }



var x = +prompt("enter Product Price"); // 1000
var y = +prompt("enter Dis Price"); // 10%
var z = +prompt("enter Gst Price"); // 18%



// var result = (x-(x*y/100))*(1+z/100);  
var result = x-(x*y/100)+(x-(x*y/100))*z/100;

console.log(result);


















// Logical Operators
// &&	logical and
// ||	logical or
// !	logical not



// var OpeningBalance = 1000;
// var PanCard = "Yes";
// var Adhaar = "Yes";

// result = OpeningBalance==1000 && PanCard=="Yes" && Adhaar=="Yes";
// console.log(result)

















// >50 "true", "False" total = >=180

// var hindi = +prompt("Enter hindi Marks")
// var eng = +prompt("Enter English Marks");
// var math = +prompt("Enter Math Marks");
// var total = hindi+eng+math;

//result = hindi>50 && eng>50 && math>50 && total>=180; // all condition is true.  &&
//result = (hindi>50 && eng>50 && math>50) || (total>=180); // && with ||



// console.log(result)
