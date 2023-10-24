//1. How do we assign a value to a variable?

let color = "red"

//2. How do we change the value of a variable?

color = "blue"

//3. How do we assign an existing variable to a new variable?

let newColor = color

//4. Remind me, what are declare, assign, and define?

//Declare: we create a variable by using the word "let or const"
//Assign: giving value after declaring a variable
//Define: giving a variable its initial data type

//5. What is pseudocoding and why should you do it?

//What is: Pseudocoding is a way to write a description of a computer program or  algorithm in plain english
//Why: We should use to simplify and planning the program in small logical steps. 


//6. What percentage of time should be spent
//thinking about how you're going to solve a problem vs actually typing in code to solve it?

//A reasonable amount spent in planning and solving the problem is 50-70%
//and for coding it takes about 50-30%

//=============================================================================

//1. Create a variable called firstVariable

let firstVariable

//2. Assign it the value of the string "Hello World"

firstVariable = "Hello World"

//3. Change the value of this variable to some number

firstVariable = 12

//4. Store the value of firstVariable in a new variable called second Variable

let secondVariable = firstVariable

//5. Change the value of secondVariableto any string.

secondVariable = "I am happy"



//6. What is the value of firstVariable?

//it must print 12
console.log(firstVariable)

//7. Create a variable called yourName and set it equal to your name as a string.
//Then, write an expression that takes the string "Hello, my name is " 
//and the variable yourName so that it returns a new string with them concatenated.

let yourName = "Jorge"
// console.log(`my name is: ${yourName}`)

let newString = "Hello, my name is:" + " " + yourName
console.log(newString)

//=============================================================================

//Using the provided variable definitions, replace the blanks so that all log statements print truein the console.
//Answers should be all be valid JS syntax and not weird things 
//that don't make sense but happen to print trueto the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' ==='Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(!false || false)
console.log(e === 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

