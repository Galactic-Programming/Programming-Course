// This = reference to the object where "this" is used in a function (the object depends on the immediate context of the function call).
//        It can be used to access properties and methods of the object
//        It can be used to invoke a method on the object
//        It can be used to access the object itself
//        It can be used to access the object in a nested function
//        It can be used to access the object in a callback function
//        It can be used to access the object in an event handler
//        It can be used to access the object in a constructor function
//        It can be used to access the object in a class method....

//        (the object can be a function, an object, an array, a string, a number, a boolean, null, undefined, or a global object (window, document, etc.))

const person1 = {
  name: "Spongebob",
  favFood: "Krabby Patty",
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I love ${this.favFood}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  }
};

person1.greet(); // Hello, my name is Spongebob and I love Krabby Patty
person1.eat(); // Spongebob is eating Krabby Patty

const person2 = {
  name: "Patrick",
  favFood: "Ice Cream",
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I love ${this.favFood}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  }
};

person2.greet(); // Hello, my name is Patrick and I love Ice Cream
person2.eat(); // Patrick is eating Ice Cream

