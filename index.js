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

///Exercise 4- Object Creation and Manipulation
//Construct an object named student with properties like name, age, and grade
let student = {
    name: "Walker",
    age: 5,
    grade: "Kindergarten",
    print() {
        console.log(`${this.name} is ${this.age} years old and is in ${this.grade}.`)
    }
};


  student.print();

  //Walker is 5 years old and is in Kindergarten

  ///here i create an object named student with the attributes or properties--key:values of name: walker, age:5 and grade:kindergarten,
  //as a part of that object i create function called "print" and that function console logs with the `${ to pass in the values from
  //the current object using "this" method and passing the values from the corresponding keys.  I am just not sure why the 
  //strings do not need to be in quotations. 

  ///5 Exercise 5: Advanced Object Methods
  //Implement an object named library with properties for books (as an array) and methods to addBook(bookName) and removeBook(bookName).
//   let library= {
//     books:["It","The Shining", "The Stand"],
//     addBook(bookName) {
//         this.books.push(bookName)
//     },
//     removeBook(bookName) {
//         this.books.remove(bookName)
//     }
//   };
//   library.addBook("The Pet Semetary");
//   console.log(library);
//   library.removeBook( "It");
//   console.log(library);
//   break at 1:13  ///this isn't working for remove after multiple attempts and help from google and trying to find other methods. 


let library = {
    books: ["It", "The Shining", "The Stand"],
    addBook(bookName) {
      this.books.push(bookName);
    },
    removeBook(bookName) {
      const indexToRemove = this.books.indexOf(bookName);
      if (indexToRemove !== -1) {
        this.books.splice(indexToRemove, 1);
      }
    }
  };
  
  library.addBook("The Pet Semetary");
  console.log(library);
  library.removeBook("It");
  console.log(library);
////this works but i barely know how. I kind of understand the add book with push method. We created an object library with 
//an array labeled books with three book titles, next in the object we created a function? called addBook with a parameter of 
//and an method of push on this(current object).books(property of current object library)so that we can then add a new bookName
//beblow when i invoke the function buy using the library.addBook("Pet SEmatary")passing Pet Semetary into the argument.

  
