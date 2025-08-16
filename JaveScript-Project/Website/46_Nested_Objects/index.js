// Nested Objects = Objects inside of other objects.
//                  Allows you to represent more complex data structures.
//                  Child Object is enclosed by a Parent Object.

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: "Spongebob Squarepants",
    age: 20,
    isStudent: true,
    hobbies : ["Jellyfishing", "Bikini Bottom", "Chilling"],
    address: {
        street: "124 Conch Street",
        city: "Bikini Bottom",
        state: "Pacific Ocean",
        zip: "12345"
    }
}

// console.log(person.fullName); // Spongebob Squarepants
// console.log(person.age); // 20
// console.log(person.isStudent); // true
// console.log(person.hobbies[2]); // Chilling
// console.log(person.address.city); // Bikini Bottom

for (const property in person.address) {
    console.log(`${property}: ${person.address[property]}`);
}

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob Squarepants", 20, "124 Conch Street", "Bikini Bottom", "Pacific Ocean");

const person2 = new Person("Patrick Star", 21, "123 Rock Street", "Bikini Bottom", "Pacific Ocean");

const person3 = new Person("Squidward Tentacles", 22, "125 Conch Street", "Bikini Bottom", "Pacific Ocean");

