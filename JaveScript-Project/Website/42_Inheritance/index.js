// Inheritance in JavaScript allows one object to access properties and methods of another object. This is a fundamental concept in object-oriented programming, enabling code reuse and the creation of hierarchical relationships between objects.

// In JavaScript, inheritance is typically achieved through prototypes. When an object is created, it can inherit properties and methods from another object, known as its prototype. This allows for a chain of inheritance, where an object can access properties and methods from its own prototype as well as from the prototypes of its parent objects.

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

dog.speak(); // Buddy barks.
cat.speak(); // Whiskers meows.

// The `Dog` and `Cat` classes inherit from the `Animal` class using the `extends` keyword. This means that they can access properties and methods defined in the `Animal` class, while also providing their own implementations of the `speak` method.

// Inheritance allows for a clear and organized structure in code, enabling developers to create more complex systems while maintaining readability and reusability. It also supports polymorphism, where different objects can be treated as instances of the same parent class, allowing for flexible and dynamic behavior in applications.

// In addition to class-based inheritance, JavaScript also supports prototype-based inheritance, where objects can inherit directly from other objects. This is done using the `Object.create()` method or by setting the prototype of an object using the `__proto__` property. However, class-based inheritance is more commonly used in modern JavaScript development due to its clearer syntax and structure.

// In summary, inheritance in JavaScript is a powerful feature that allows for the creation of complex and organized code structures, enabling developers to build upon existing functionality and create more maintainable applications.

// Inheritance can also be used to create a hierarchy of classes, where a base class defines common properties and methods, and derived classes extend or override those properties and methods. This allows for a more modular and reusable code structure, making it easier to manage and maintain large codebases.

// In addition to the `extends` keyword, JavaScript also provides the `super` keyword, which allows derived classes to call methods from their parent class. This is particularly useful when you want to extend the functionality of a method while still retaining the behavior defined in the parent class.

class Bird extends Animal {
    constructor(name, canFly) {
        super(name); // Call the parent class constructor
        this.canFly = canFly;
    }
}

class Eagle extends Bird {
    speak() {
        console.log(`${this.name} screeches.`);
    }
}
class Penguin extends Bird {
    speak() {
        console.log(`${this.name} squawks.`);
    }
}
class Fish extends Animal {
    speak() {
        console.log(`${this.name} bubbles.`);
    }
}
class Shark extends Fish {
    speak() {
        console.log(`${this.name} roars.`);
    }
}
class Goldfish extends Fish {
    speak() {
        console.log(`${this.name} glubs.`);
    }
}

const fish = new Fish("Nemo");
const shark = new Shark("Bruce");
const goldfish = new Goldfish("Goldie");
const eagle = new Eagle("Eddie", true);
const penguin = new Penguin("Penny", false);

eagle.speak(); // Eddie screeches.
penguin.speak(); // Penny squawks.
fish.speak(); // Nemo bubbles.
shark.speak(); // Bruce roars.
goldfish.speak(); // Goldie glubs.

