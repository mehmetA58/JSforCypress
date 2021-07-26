//?? MAP : bir array den yararlanarak yeni bir array olusturmaktir

var originalArray = [2, 4, 6, 8, 10];
function double(x) {
  return x * 2;
}

const newArray = originalArray.map(double);
console.log(newArray); //[4, 8, 12, 16, 20]

const newArray1 = originalArray.map(function double(x) {
  return x * 2;
});
console.log(newArray1); // [4, 8, 12, 16, 20]

//?? FILTER :
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//* 10dan buyuk sayilar

const filtreSayilar = numbers.filter((x) => x > 10);
//const filtreSayilar = numbers.filter( eachNum => eachNum >10)
console.log(filtreSayilar); // [11, 12, 13, 14, 15]

//* cift sayilar
const ciftSayilar = numbers.filter((x) => x % 2 == 0);
console.log(ciftSayilar); //[2, 4, 6, 8, 10, 12, 14]

//* tek sayilar
const tekSayilar = numbers.filter((x) => x % 2 == 1);
console.log(tekSayilar); //[1, 3, 5, 7, 9, 11, 13, 15]

//*10 dan buyuk cift sayilar
const ondanBuyukCift = numbers.filter((x) => x % 2 == 0 && x > 10);
console.log(ondanBuyukCift); // [12, 14];

//* Kucukten buyuge siralama
console.log(numbers.sort((a, b) => a - b)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//* Buyukten kucuge siralama
console.log(numbers.sort((a, b) => b - a)); //[15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//*filter () arrays

var people = [
  {
    id: 1,
    name: "John",
    age: 28,
  },
  {
    id: 2,
    name: "Jane",
    age: 32,
  },
  {
    id: 3,
    name: "Peter",
    age: 55,
  },
];

let young = people.filter((person) => person.age < 35);
console.log(young); //{id: 1, name: "John", age: 28} // {id: 2, name: "Jane", age: 32}

let old = people.filter((person) => person.age > 35);
console.log(old); //{id: 3, name: "Peter", age: 55}
