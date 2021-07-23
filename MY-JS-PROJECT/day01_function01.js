//??Fonksiyonlar

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

//?? Iki Parametreli Fonksiyon

//soru
function nameAge(name, age) {
  console.log(name + age);
}
nameAge("Ahmet ", 35); //Ahmet 35

function nameAge(name, age) {
  console.log(`Adiniz ${name} Yasiniz ${age}`); //Adiniz Ahmet Yasiniz 35
}

// soru
function information(location, price, rating) {
  console.log(location + price + rating);
}

information("Fransa ", 200, " 3 stars"); //Fransa 200 3 stars
