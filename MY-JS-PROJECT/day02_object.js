//??0bject {}

// Objectler data katdetmek icin kullanilir
// {} ile olusturulur

var fName = "Ali";
var lName = "Can";
var age = 25;

var information = ` fName : ${fName} lName : ${lName} age : ${age}`;
console.log(information);

//**person object
var person = {
  fName: "Ali",
  lName: "Can",
  age: 25,
  isEmployed: true,
};
console.log(person); // fName : Ali lName : Can age : 25

console.log(typeof person); //object

//**Bilgileri cagirma

//!!   1) . notation

console.log(person.fName); //Ali
console.log(typeof person.fName); //string  console.log(typeof (person.fName)); iki sekilde de oluyor
console.log(person.lName); //Can
console.log(typeof person.age); //number

//!!   2) [] notation

console.log(person["fName"]); //Ali
console.log(person["age"]); //25
