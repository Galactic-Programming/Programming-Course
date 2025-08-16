// Static = keyword that defines properties or methods that belong to a class itself rather than the object created from that class (class owns anything static, not the objects).

class MathUtils {
  static PI = 3.14159; // Static property

  static getDiameter(radius) {
    return 2 * radius; // Static method
  }

  static getCircumference(radius) {
    return 2 * this.PI * radius; // Static method
  }

  static getArea(radius) {
    return this.PI * radius * radius; // Static method
  }
}

console.log(MathUtils.PI); // Accessing static property
console.log(MathUtils.getDiameter(5)); // Accessing static method
console.log(MathUtils.getCircumference(5)); // Accessing static method
console.log(MathUtils.getArea(5)); // Accessing static method

class User {
    static userCount = 0; // Static property to keep track of user count

    constructor(name, email) {
        this.name = name;
        this.email = email;
        User.userCount++; // Increment user count when a new user is created
    }

    static getUserCount() {
        console.log(`Total users online: ${User.userCount}`);
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const user1 = new User("Alice");
const user2 = new User("Bob");
const user3 = new User("Charlie");

user1.sayHello(); // Hello, my name is Alice
user2.sayHello(); // Hello, my name is Bob
user3.sayHello(); // Hello, my name is Charlie

console.log(User.userCount); // Accessing static property to get the user count
User.getUserCount(); // Accessing static method to get the user count