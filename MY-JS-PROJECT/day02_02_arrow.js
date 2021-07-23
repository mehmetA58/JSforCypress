//??Anonymous Function (isimsiz)

//function (a, b, c) {
//return a+b+c
//}  bu sekilde hata verir bir degiskene atama yapmak gerekir
//Uncaught SyntaxError: Function statements require a function name

var result = function (a, b, c) {
  return a + b + c;
};
console.log(result(1, 2, 3));

let info = function (fName, lName, age) {
  console.log(fName + " " + lName + " " + age);
};

info("ali", "can", 25);

//??Arrow Fonksiyonlari
//ok isareti fonk  (=>)
//bu fonksiyonlarda suslu parantez kullanmazsak otomatik return yapar..

//function kelimesini ve ismini sil
//parametre ve body arasina => isareti konur
//() sil, eger tekparametre var ise

var arrow = (a) => a + 100;
console.log(arrow(10)); //110

var sum = (x, y) => x + y + 100; // Arrow fonk tanimlamasi
console.log(sum(1, 2)); //invoke  //103
console.log(sum(3, 10)); //invoke  //113

//??Parametresiz Fonksiyonlarda Arrow

//Traditional Function
var a = 5,
  b = 6;
function sum1() {
  return a + b + 100;
}
console.log(sum1()); //111

//Arrow Function
var sum1 = (a, b) => a + b + 100;
console.log(sum1(5, 6)); //111

//Anonymous Function
a = 6;
b = 7;
var newSum = function () {
  return a + b + 100;
};
console.log(newSum);

//Prizma Hacim

var prizma1 = function (l, w, h) {
  return l * w * h;
};
console.log(prizma1(1, 2, 3)); //6

var arrowPrizma = (l, w, h) => l * w * h;

console.log(arrowPrizma(3, 4, 2)); //24
