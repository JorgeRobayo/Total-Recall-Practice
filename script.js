//1. How do we assign a value to a variable?

// let color = "red"

//2. How do we change the value of a variable?

// color = "blue"

//3. How do we assign an existing variable to a new variable?

// let newColor = color

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

// let firstVariable

//2. Assign it the value of the string "Hello World"

// firstVariable = "Hello World"

//3. Change the value of this variable to some number

// firstVariable = 12

//4. Store the value of firstVariable in a new variable called second Variable

// let secondVariable = firstVariable

//5. Change the value of secondVariableto any string.

// secondVariable = "I am happy"



//6. What is the value of firstVariable?

//it must print 12
// console.log(firstVariable)

//7. Create a variable called yourName and set it equal to your name as a string.
//Then, write an expression that takes the string "Hello, my name is " 
//and the variable yourName so that it returns a new string with them concatenated.

// let yourName = "Jorge"
// // console.log(`my name is: ${yourName}`)

// let newString = "Hello, my name is:" + " " + yourName
// console.log(newString)

//=============================================================================

//Using the provided variable definitions, replace the blanks so that all log statements print truein the console.
//Answers should be all be valid JS syntax and not weird things 
//that don't make sense but happen to print trueto the console

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' ==='Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(!false || false)
// console.log(e === 'Kevin');
// console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

//=============================================================================

//1. Declare a variable animal. Set it to be either "cow" or something else

// let animal = "cow"

//2. Write code that will print out "mooooo" if the it is equal to cow

//3. Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."

// if(animal === "cow"){
//     console.log("Mooo")
// }
// else{
//     console.log("Hey! You are not a cow!")
// }

//=============================================================================

//1. Make a variable that holds a person's age; be semantic

// let age = 40

//2.Write code that will print out "Here are the keys!", if the age is 16 years or older, or,
// if the age is younger than 16, a message should print "Sorry, you're too young."

// if(age >= 16){
//     console.log("Here are the keys")
// }
// else{
//     console.log("You are too young")
// }

//=============================================================================


// ===============
// GET EVEN
// ===============
// 1.Print out the numbers that are within the range of 1 - 100
//  for(let i = 0; i <= 100; i++){
//     console.log(i)   
//  }
//  2.Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for(let i = 0; i <= 100; i++){
    
//     if(i % 2 === 0){
//         console.log(i+"<-- is an even number" )
//     }  
//     else{ 
//         console.log(i)
//     } 
//  }
// // F. Biggie Smalls
// Create a variable that contains an integer.
// let variable = 150;

// // Write an if ... elsestatement that:

// if (variable < 100) {
//     console.log('little number')
// } else console.log('big number')

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:
// let number = 8;

// if (number < 5) {
//     console.log('little number')
// } else if (number > 10) {
//     console.log('big number')
// } else {
//     console.log('monkey')
// }
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and 
// Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];
// What's Kristyn wearing today? Using bracket notation to
// access items in kristynsCloset, log the sentence
// "Kristyn is rocking that " + the third item in Kristyn's closet
// + " today!" to the console.
// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)

// Kristyn just bought some sweet shades! 
// Add "raybans"to her closet after "yellow knit hat".
// kristynsCloset.splice(6, 0, 'raybans')
// console.log(kristynsCloset)
// Kristyn spilled coffee on her hat... modify this 
// item to read "stained knit hat"instead of yellow.
// kristynsCloset[5] = 'stained knit hat'
// console.log(kristynsCloset)
// Put together an outfit for Thom! Using bracket notation, 
// access the first element in Thom's shirtsarray.
// console.log(thomsCloset[0][1])
// In the same way, access one item from Thom's pants array.
//console.log(thomsCloset[1][2])
// Access one item from Thom's accessories array.
//console.log(thomsCloset[2][1])
// Log a sentence about what Thom's wearing. 
// Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
//console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}`)
// Get more specific about what kind of PJs Thom's wearing this winter.
// Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[1][2] = 'Footie Pajamas'
// console.log(thomsCloset)


//======================================================================

//A printGreeting Do you think you could write 
//a function called printGreetingwith a parameter namethat returns a 
//greeting with the argument interpolated into the greeting?
// Greeting = printGreeting (name)

function printGreeting(name){
    return `Hello there ${name}`
    // return greeting
}

console.log(printGreeting('slimer'))

// console.log ("Slimer")