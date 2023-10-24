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