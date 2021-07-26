//*10) concat(): Array leri birlestirir

var drinks = ["coke", "water", "fanta", "ayran"];
var kebaps = ["adana", "urfa", "ciger", "patlican"];

var shoppingList = drinks.concat(kebaps);
console.log(shoppingList); //["coke", "water", "fanta", "ayran", "adana", "urfa", "ciger", "patlican"]

//*11) reverse():
var numbers = [1, 2, 3, 4, 5, 6, -7, -8];
console.log("Original List : " + numbers); //Original List : 1,2,3,4,5,6,-7,-8

numbers.reverse();

console.log("Reversed List : " + numbers); //Reversed List : -8,-7,6,5,4,3,2,1

//*12) sort(): kucukten buyuge

numbers.sort();
console.log("Sorted List :" + numbers); //Sorted List :-7,-8,1,2,3,4,5,6

//* buyukten kucuge  sort + reverse

numbers.reverse();
console.log(numbers); // [6, 5, 4, 3, 2, 1, -8, -7]; negatif sayilarda siralama problemli...
