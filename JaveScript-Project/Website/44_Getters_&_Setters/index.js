// Getter = sepcial method that makes a property read-only.
// Setter = special method that makes a property write-only.
// They are used to access and modify the properties of an object in a controlled way.
// They are used to encapsulate the properties of an object and provide a way to access and modify them without directly accessing the properties.
// Validate and modify a value when reading or writing a property.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      console.error("Invalid width");
    }
  }

  get width() {
    return `${this._width.toFixed(2)} cm`; // Returns width with 2 decimal places
  }

  set height(value) {
    if (value > 0) {
      this._height = value;
    } else {
      console.error("Invalid height");
    }
  }

  get height() {
    return `${this._height.toFixed(2)} cm`; // Returns height with 2 decimal places
  }

  get area() {
    return `${(this._width * this._height).toFixed(2)} cm²`; // Returns area with 2 decimal places
  }
}

const rectangle = new Rectangle(10, 20);

console.log(rectangle.width); // 10
console.log(rectangle.height); // 20
console.log(rectangle.area); // 200

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(value) {
    if (typeof value === "string" && value.length > 0) {
      this._firstName = value;
    } else {
      console.error("Invalid first name");
    }
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(value) {
    if (typeof value === "string" && value.length > 0) {
      this._lastName = value;
    } else {
      console.error("Invalid last name");
    }
  }

  get lastName() {
    return this._lastName;
  }

  set age(value) {
    if (typeof value === "number" && value > 0) {
      this._age = value;
    } else {
      console.error("Invalid age");
    }
  }
  get age() {
    return this._age;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);

console.log(
  `${person1.firstName} ${person1.lastName} is ${person1.age} years old.`
);
console.log(
  `${person2.firstName} ${person2.lastName} is ${person2.age} years old.`
);
console.log(person1.fullName); // John Doe
console.log(person2.fullName); // Jane Smith