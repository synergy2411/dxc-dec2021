// FUNCTION : are first class citizens in JavaScript
// Function can be treated as value
// Function expression
// Anonymous Function
// Nested Function
// Function can return a function
// Function Hoisting
// IIFE : Immediately Invoked Function Expression


(function(){
    var x = 101;
    console.log("Immediately Invoked")
}())

console.log(x);





// JavaScript two phases
// - Creation Phase -> allocates the memory to variable and function
// - Execution Phase -> JS executes all assignments and return statements

// function mystery(){
//     var chooseNumber = function (){
//         return 7;
//     }
//     return chooseNumber;
//     var chooseNumber = function (){
//         return 12;
//     }
// }

// var nestedFn = mystery()

// console.log(nestedFn());            // 



// console.log(mystery());         // ?




// var addition = function (n1, n2){
//     return n1 + n2;
// }

// // console.log(add(2,4))

// console.log(addition(3,5));      // ?