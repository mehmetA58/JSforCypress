//?? ARRAY DE dATA EKLEME VE SİLME

var friendList = ["Can", "Ece", "Ali", "Naz"];
console.log(friendList); //["Can", "Ece", "Ali", "Naz"]
console.log(typeof friendList); //object

//* 1) push() : Array in sonuna data ekler
friendList.push("Sinan");
console.log(friendList); //["Can", "Ece", "Ali", "Naz", "Sinan"]

//*2) unshift() : Array in basina data ekler
friendList.unshift("Derya");
console.log(friendList); //["Derya", "Can", "Ece", "Ali", "Naz", "Sinan"]

//*3) pop() : Son datayi siler
friendList.pop();
console.log(friendList); //["Derya", "Can", "Ece", "Ali", "Naz"]

//*4) shift() : Ilk datayi siler
friendList.shift();
console.log(friendList); //["Can", "Ece", "Ali", "Naz"]

var ages = [10, 20, 30, 40, 50, 30, 60, , 30];

//*5) indexOf(item, from)
console.log(ages.indexOf(20)); //1 ,  20 nin indexini verir
console.log(ages.indexOf(50)); //4

console.log(ages.indexOf(30, 3)); //5
//30 sayisi 2.defa kacinci index de vardir onu soyler 3. siradaki 30 dan sonra bir daha sonraki 30 kacinci index de onu veriyor

//* return -1 :eslesme yok demektir
console.log(ages.indexOf(20, 3)); //-1
console.log(ages.indexOf(80)); //-1

//*6) lastIndexOf() : aranilanin son indexini verir
console.log(ages.lastIndexOf(30)); //8

//*7) includes (item, starting index) : true false doner

console.log(ages.includes(60)); //true
console.log(ages.includes(70)); //false

console.log(ages.includes(40, 3)); //true
console.log(ages.includes(10, 2)); //false

const isExist = ages.includes(40, 3);
console.log(isExist); //true

const isExist1 = ages.includes(80, 3);
console.log(isExist1); //false
