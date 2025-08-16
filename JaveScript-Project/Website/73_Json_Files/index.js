// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key: value} or [ value1, value2, value3 ]

//        JSON.stringify() = Converts a JS object to a JSON string
//        JSON.parse() = converts a JSON string to a JS object

const names = ["SpongeBob", "Patrick", "Sandy", "Squidward"];

const person = {
    "name": "SpongeBob",
    "age": 20,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Bubble Blowing", "Karate"]
}

const people = [
    {"name": "SpongeBob", "age": 20, "isEmployed": true},
    {"name": "Patrick", "age": 21, "isEmployed": false},
    {"name": "Sandy", "age": 22, "isEmployed": true},
    {"name": "Squidward", "age": 23, "isEmployed": false}
]

const jsonNames = `["SpongeBob", "Patrick", "Sandy", "Squidward"]`;

const jsonPerson = `{
    "name": "SpongeBob",
    "age": 20,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Bubble Blowing", "Karate"]
}`;

const jsonPeople = `[
    {"name": "SpongeBob", "age": 20, "isEmployed": true},
    {"name": "Patrick", "age": 21, "isEmployed": false},
    {"name": "Sandy", "age": 22, "isEmployed": true},
    {"name": "Squidward", "age": 23, "isEmployed": false}
]`;

// Convert JS object to JSON string
const jsonStringNames = JSON.stringify(names);
console.log(jsonStringNames);

// Convert JSON string to JS object
const parsedNames = JSON.parse(jsonNames);
console.log(parsedNames);

// Convert JS object to JSON string
const jsonStringPerson = JSON.stringify(person);
console.log(jsonStringPerson);

// Convert JSON string to JS object
const parsedPerson = JSON.parse(jsonPerson);
console.log(parsedPerson);

fetch("people.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            console.log(element.name);
        });
    })
    .catch(error => {
        console.error("Error fetching people.json:", error);
    });