// 1) if conditional

/*
== checks if values are equal but does not check type
=== also checks if the datatypes are the same
*/

const x = 10;

// check if x is equal to 10
if (x=='10'){
    console.log('x is 10');
}else{
    console.log('x is not 10')
}

if (x !== '10'){
    console.log('x is not equal to 10 in terms of datatype')
}

// 2) or, and

delicious = true;
cheap = false;

if (delicious || cheap){
    console.log('buy that')
}

if (delicious && cheap){
    console.log('worth it')
}

// imagine a scenario where the playground allows only kids above age 10
const peter = 11
const john = 9
let is_allowed_peter = peter>10 ? true:false;
let is_allowed_john = john>10 ? true:false;
console.log("is peter allowed? "+is_allowed_peter)
console.log("is john allowed? "+is_allowed_john)


