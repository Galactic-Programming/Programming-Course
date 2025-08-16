// Object = a collection of related properties and/or methods
//          Can represent real-world objects (people, products, places, etc.)
/* Object = {
  property1: value1,
  property2: value2,
  method1: function() { ... },
  method2: function() { ... }
} */

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function() {console.log("Hi, I'm Spongebob!");},
    sayGoodBye: function() {console.log("Goodbye!");},
    eat: function() {console.log("I'm eating a Krabby Patty!");},
    swim: function() {console.log("I'm swimming in Bikini Bottom!");}
};

console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.isEmployed)
person1.sayHello()
person1.sayGoodBye()

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey, I'm Patrick!"),
    sayGoodBye: () => console.log("Bye...!"),
    eat: () => console.log("I'm eating a Krabby Patty!"),
    swim: () => console.log("I'm swimming in Bikini Bottom!")
};


