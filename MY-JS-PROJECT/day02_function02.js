//?? Fonksiyonlar

function sum() {
  var num1 = 10;
  var num2 = 20;
  var num3 = 30;
  var total = num1 + num2 + num3;

  return total;
}

console.log(sum()); //60

function cikarma(params) {
  var num1 = 30;
  var num2 = 10;
  var sonuc = num1 - num2;

  return sonuc;
}

console.log(cikarma()); //20

//**Fonksiyon tanimlama

function fonksiyonismiz(parametre1, parametre2) {
  return donusDegeri;
}

//?? 1.Parametresiz Fonksiyon

function greet(params) {
  console.log("Hİ !!");
}
greet(); //Hİ !!

//?? 2.Tek Parametreli Fonksiyon
function greetPeople(namePeople) {
  console.log("Hi " + namePeople);
}

greetPeople(`Ali`); //Hi Ali
greetPeople(true); //Hi true
greetPeople(20); //Hi 20
greetPeople(null); //Hi null
greetPeople("ali", "ece"); //Hi ali
greetPeople(); //Hi undefined

//?? Birdeb Fazla Parametreli Fonksiyon

// soru
function information(location, price, rating) {
  console.log(`Location : ${location}.
    Price : ${price}.
    Rating : ${rating}`);
}
information("Fransa ", 200, " 3 stars"); //Fransa 200 3 stars

//**Fonksiyonu cagirip yeni bir degiskende saklama

const mySum = sum() + 100;
console.log(mySum); //160

//**Fonsiyonu parametre ve return ile cagirma

function diff(num1, num2) {
  return num1 - num2;
}

console.log(diff(100, 50)); //50
console.log(diff(100, 50, 60, 30)); //50  sonuc ayni sadece iki parametre alir

console.log(diff(1000, 50)); //950

//!! Fonksiyonlari iki sekilde tanimalyip cagirabiliriz
//1) Direk tanimlama ve cagirma
//2)Fonsiyonu bir degisken ile tanimalayip cagirma

function square(num) {
  return num * num;
}
console.log(square(8)); //64

const squareOfNumber = function square(num) {
  return num * num;
};
console.log(squareOfNumber(8)); //64
