/// 1.)Create a function named greetUser that takes a name as a parameter and returns a greeting message.
function greetUser(name) {
    console.log("Hello there "+name+ "!")
};
greetUser("Pauldo");
//another way
let helloUser= function(name) {
    console.log("Hey there "+name)
//Hey there Pauldo
}
helloUser("Laura");
//Hey there Laura

//one more attempt--this time an arrow function for practice
let hiThere = (name) => console.log("howdy ho " +name)
hiThere("Mickey");
//howdy ho Mickey


///Exercise 2

// Convert this to arrow function:
// function times(p, q) {
//     console.log(p*q)
// };
// times(3,7); //21
let times= (p,q) => console.log(p*q)
times(11,3); // 33
//try other variables
let time= (p,q) => console.log(p*q)
time(4,6); //24

///Exercise 3- 
///Create an arrow function that calculates the area of a rectangle. It should take the length and breadth as parameters.
// function calcRectangle(length,width) {
//    console.log(length * width);
// }
// calcRectangle(4,3);
let calcRectangle=(length,width)=> console.log(length*width)
calcRectangle(12,4); //48
