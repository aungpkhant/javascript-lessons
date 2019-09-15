// 1) Basic loop 

//print 1 to 10 with for 
for (let i=1; i<=10; i++){
    console.log(`for loop: ${i}`)
}

//print 1 to 10 with while 
let counter = 1;
while (counter <=10){
    console.log(`while loop: ${counter}`)
    counter++;
}

// loop through the students array to print out its attributes
const students = [
    {
        id: 1,
        name: "Johnathan",
        isCool: true
    },
    {
        id: 2,
        name: "Joeseph",
        isCool: true

    },
    {
        id: 3,
        name: "Joestar",
        isCool: false
    }
]

for (let i=0; i< students.length; i++){
    console.log(students[i].name);
}

// 2) for of loop
for (let student of students){
    console.log("For off loop: "+student.name)
}


// 3) higher order array methods
// return an array of a certain attribute
const student_names = students.map(function(student){
    return student.name;
});

console.log(student_names)

// return the student names who matches a certain criteria (isCool == true)
const cool_students = students.filter(function(student){
    return student.isCool === true;
});

console.log(cool_students)

// map + filter
const cool_students_names = students.filter(function(student){
    return student.isCool === true;
}).map(function(student){
    return student.name;
});

console.log(cool_students_names)