// Expressions & Conditionals 
// Expression: A fragment of code that produces a value is called an expression. Every value written literally is an expression For Example -> 77 or "Hamza"

// Operators in Javascript

// 1. Arithmetic Operators

//Arithmetic Operators in Js
// console.log("Operators in Js");
let a = 45;
let b = 5;
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a / b = ", a/b);
console.log("a * b = ", a*b);
console.log("a ** b = ", a**b);// exponentiation raise power 2
console.log("a % b = ", a%b); //Modulus: it gives remainder
console.log("a++ = ", a++); //it will give the same value of a but if we now do cons.log (a) then Ans:11
console.log("a = ", a);
console.log("a-- = ", a--); //it will also give the same value but add 1 as decrement
console.log("++a = ", ++a); //it will also give the same value but add 1 as increment
console.log("--a = ", --a); //it will give the same value of a

// let c = 2;
// console.log("++c = ", ++c); 3
// console.log("c++ = ", c++)4 but show 3
// console.log("--c = ", --c);it will subtract 1 from 4 so 4-1=3
// console.log("c-- = ", c--);2 but show 3
// console.log("c = ", c);//2
// console.log("c-- = ", c--);1 but show 2
// console.log("c = ", c);

// Assigment Operators
let assignment = 1
assignment += 5 // same as assignment = assignment + 5
console.log("assignment is now =6 ", assignment);
assignment -= 5 // same as assignment = assignment - 5
console.log("assignment is now =1 ", assignment);
assignment *= 5 // same as assignment = assignment * 5
console.log("assignment is now =5 ", assignment);
assignment /= 5 // same as assignment = assignment / 5
console.log("assignment is now =1 ", assignment);
assignment %= 5 // same as assignment = assignment % 5
console.log("assignment is now =1 ", assignment);
assignment ** 5 // same as assignment = assignment ** 5
console.log("assignment is now =1 ", assignment);

// Comparison Operators
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2" , comp1 == comp2)
console.log("comp1 != comp2" , comp1 != comp2) 
console.log("comp1 === comp2" , comp1 === comp2) 
console.log("comp1 !== comp2" , comp1 !== comp2) 
console.log("comp1 > comp2" , comp1 > comp2) 

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5);//And Operator it will give true when both values are true
console.log(x>y || x==5);//OR Operator it will give true even if at least one value is correct
console.log(!false);//Not Operator it will turn false into true and true into false
console.log(!true);//Not Operator it will turn false into true and true into false

// Note: Apart from these, we also have type and bitwise operators.Bitwise operators perform bit by bit operations on numbers.
// 7 + 8 = 15 where 7 + 8 are operands and + is operator and 15 is result.

/* Comments in JavaScript
Sometimes we want our programs to contain a text which is not executed by our Js engine.
Such a text is called comment in JavaScript

A Comment in JavaScript can be written as follows:

let a = 2; // This is a single comment. where /* is a multi-line comment.*/ 

/* Conditional Statements:
Sometimes we want to execute a block of code based off some condition.

In JavaScript we have three types of Conditional Statements.
1. if Statement.
2. if ... else Statement.
3. if ... else if ... else Statement.

const prompt = require('prompt-sync')(); //This is necessary for the prompt to work.
let a = prompt("hey what your age?");
a = Number.parseInt(a); //Converts the String to a Number and is Called Type-Casting.
// console.log(typeof a);
// if(a<0){
//     alert("This is an invalid age");
// }
// else if(a<9){
//     alert("You are a kid and you cannot even think of driving")
// }
// else if(a<18 && a>=9){
//     alert("You are a kid and you can think of driving after 18")
// }
// else{
//     alert("You can now drive as you are above 18");
// }
*/
// Ternary Operator
console.log("You can", a<18? "not drive" : "drive")



