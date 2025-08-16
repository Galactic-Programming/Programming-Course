// Super = Keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass) from a child (subclass).
// It allows you to access the parent class's properties and methods, which is useful for inheritance and method overriding.
//         this = this object
//         super = parent class

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move(speed) {
    console.log(`${this.name} is moving at ${speed} km/h`);
  }
}
class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age); // Call the constructor of the parent class (Animal)
    this.runSpeed = runSpeed;
  }
  run() {
    console.log(`${this.name} can run`);
    super.move(this.runSpeed); // Call the move method from the parent class
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age); // Call the constructor of the parent class (Animal)
    this.swimSpeed = swimSpeed;
  }
  swim() {
    console.log(`${this.name} can swim`);
    super.move(this.swimSpeed); // Call the move method from the parent class
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age); // Call the constructor of the parent class (Animal)
    this.flySpeed = flySpeed;
  }
  fly() {
    console.log(`${this.name} can fly`);
    super.move(this.flySpeed); // Call the move method from the parent class
  }
}

const rabbit = new Rabbit("Bunny", 2, 30);
const fish = new Fish("Nemo", 1, 10);
const hawk = new Hawk("Hawky", 3, 50);

console.log(rabbit.name); // Bunny
console.log(fish.name); // Nemo
console.log(hawk.name); // Hawky

rabbit.run(); // Bunny can run
fish.swim(); // Nemo can swim
hawk.fly(); // Hawky can fly