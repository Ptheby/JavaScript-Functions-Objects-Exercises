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


///
