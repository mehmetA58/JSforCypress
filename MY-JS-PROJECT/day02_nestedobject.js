//??Nested Object

/*
fName: Ali        -> String
age : 25          -> Number
isEmployed: true  -> boolean
address:          ->Object   
    street: 767 5th Ave
    city: NYC
    state: New York
hobbies: swimming, running, hunting    ->Array
*/

const person = {
  fName: "Ali",
  age: 25,
  isEmployed: true,
  address: {
    street: "767 5th Ave",
    city: "NYC",
    state: "New York",
  },
  hobbies: ["swimming", "running", "hunting"], //array oldugu icin [] olacak
};

console.log(person);
console.log(person.fName);
console.log(person.isEmployed);
console.log(person.address);
console.log(person.address.city);
//{street: "767 5th Ave", city: "NYC", state: "New York"}
console.log(person.hobbies);
//(3) ["swimming", "running", "hunting"]
console.log(person.hobbies[0]); // swimming
console.log(person.hobbies[4]); // undefined
