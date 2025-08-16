// Constructors = special method for defining properties and methods of an object
//              It is used to create an object with a specific structure and behavior
//              It is used to create an object with a specific type
//              It is used to create an object with a specific prototype
//              It is used to create an object with a specific constructor
//              It is used to create an object with a specific class
//              It is used to create an object with a specific instance
//              It is used to create an object with a specific instance of a class
//              It is used to create an object with a specific instance of a constructor....

function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function() { console.log(`You drive the ${this.color} ${this.make} ${this.model} (${this.year})`); },
    this.honk = function() { console.log(`The ${this.color} ${this.make} ${this.model} (${this.year}) honks! Beep beep!`); },
    this.getDetails = function() {
        return `${this.year} ${this.color} ${this.make} ${this.model}`;
    }
};

const myCar1 = new Car("Toyota", "Corolla", 2020, "Red");

const myCar2 = new Car("Honda", "Civic", 2021, "Blue");

const myCar3 = new Car("Ford", "Mustang", 2022, "Black");

console.log(myCar1.make); // Toyota
console.log(myCar1.model); // Corolla
console.log(myCar1.year); // 2020
console.log(myCar1.color); // Red
console.log(myCar1.drive()); // You drive the Red Toyota Corolla (2020)
console.log(myCar1.honk()); // The Red Toyota Corolla (2020) honks! Beep beep!
console.log(myCar1.getDetails()); // 2020 Red Toyota Corolla
