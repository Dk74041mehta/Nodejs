//// ######## Declaration of functions #######/////

/////(1)

// function add(a,b){
//     return a+b;
// }

//   let result=add(6.8,5);
//   console.log(result)

/////(2)

// function add(a, b) {
//     let r = a + b;
//     console.log(r); // Move console.log before the return statement
//     return r;
// }
// add(3, 5);


////(3)


// let add= function(a,b){
//     return a+b;
// }

//   let result=add(3,5);
//   console.log(result);


  ////(4) Arrow functions

  
// let add=(a,b)=>{
//     return a+b;
// }

// let add=(a,b)=> a+b;       //only for single expression

//   let result=add(8,9);
//   console.log(result);

  /*   Arrow functions with implicit returns are best suited for 
  simple cases where you have a single expression that you want to 
  return. If you need to perform multiple operations or include 
  more complex logic, 
  you should use curly braces {} and an explicit return statement. 
  
  
  1)Single Expression (Implicit Return):

let add = (a, b) => a + b;

  2)Multiple Statements (Explicit Return):

  let add = (a, b) => {
    let sum = a + b;
    return sum;
};

  
  */


//(5)  Immediately Invoked Function Expression (IIFE)

// (function(){
//     console.log("I am  IIFE");
// })
// ();



//6  Functions Declarations And Expresssions Invoking   (Hoisting)

////1)Functions Declarations->Definition: A function declaration is a way to define a named function in JavaScript. It’s hoisted, meaning you can call it before it's defined in your code.

// Function Declaration

//console.log(greet("Alice"));
// function greet(name) {
//     return `Hello, ${name}!`;
// }

// Calling the function
//console.log(greet("Alice"));

 // Output: Hello, Alice!


/* Function Declaration: function greet(name) { ... } defines a function named greet.
Invocation: You can call greet anywhere in your code
 after or before its definition due to hoisting.
*/

//2)Function Expression->Definition: A function expression defines a function as part of an expression. It can be anonymous or named and is not hoisted.

// Function Expression

// const add = function(a, b) {
//     return a + b;
// };

// // Calling the function
// console.log(add(3, 4)); // Output: 7

/*
Invocation: You must define the function before you use it.

*/

//3)mmediately Invoked Function Expression (IIFE)->Definition: An IIFE is a function expression that is executed immediately after its creation. It’s commonly used to create a new scope to avoid polluting the global namespace.

// Immediately Invoked Function Expression (IIFE)
// (function() {
//     const message = "I am an IIFE";
//     console.log(message);
// })();

// Trying to access 'message' here will result in an error because 'message' is scoped within the IIFE
// console.log(message); // Uncaught ReferenceError: message is not defined



//Callback function()

// let callback=function(){

// //     console.log("I'm CallBack");
    
// // }
 
// const main=function(a,b,callback){


//     let add=a+b;
//     console.log('add:'+add);   //main function completed
// callback();  //callback function
// }

// main(2,3,callback);
// main(4,6,()=>{
//     console.log("I'm callback");
// })