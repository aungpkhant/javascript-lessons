// 1) Arrays

let numbers = [1,2,3];

// we can have different data types in js arrays
let weird_array = ['strings', true, 33];

console.log(numbers);
console.log(weird_array);

// we can add values to the front of the array using unshift
// return value is numbers of objects in the array
console.log(weird_array.unshift(1, 'two'));
console.log(weird_array);

// push to add to the back
weird_array.push('last');
console.log(weird_array);

//check if object is an array
console.log(Array.isArray(weird_array));

// 2) Object literals 
const person_object = {
    firstName: 'Derrick',
    lastName: 'Aung',
    age: '33',
    hobbies: ['fishing','eating'],
    addresses: {
        city: 'RGN',
        street: 'Peele'
    }
}

console.log(`${person_object.firstName} ${person_object.lastName}`)
console.log("Hobby includes "+person_object.hobbies[0]);

// add attribute to the object
person_object.email = "example@email.com";
console.log(person_object);

// pull values from the person variable
// variable name must match that of the names defined in object
const { firstName, lastName } = person_object;
console.log(firstName);
console.log(lastName);

// 3) Array of objects

const students = [
    {
        id: 1,
        name: "Johnathan",
        isCool: false
    },
    {
        id: 2,
        name: "Joeseph",
        isCool: false

    },
    {
        id: 3,
        name: "Joestar",
        isCool: false
    }
]

console.log(students);

// change to the commonly used JSON format
const studentsJSON = JSON.stringify(students);
console.log(studentsJSON);
