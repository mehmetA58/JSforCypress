//ARRAYS
//2 yontemle de olur

//1.yontem
var friendList = ["Can", "Ece", "Ali", "Naz"];
console.log(friendList); ///["Can", "Ece", "Ali", "Naz"]

//2.yontem
var friendList1 = new Array("Can", "Ece", "Ali", "Naz");
console.log(friendList1); //["Can", "Ece", "Ali", "Naz"]

console.log(friendList[0]); //Can
console.log(friendList[3]); //Naz
console.log(friendList[10]); //undefined

//**Can --> Han
friendList[0] = "Han";
console.log(friendList); // ["Han", "Ece", "Ali", "Naz"]

//**Naz -->Derya
friendList[3] = "Derya";
console.log(friendList); // ["Han", "Ece", "Ali", "Derya"]

//** Yeni Deger Ekleme
//**Deniz
friendList[4] = "Deniz";
console.log(friendList); //["Han", "Ece", "Ali", "Derya", "Deniz"]

friendList[7] = "Sinan";
console.log(friendList); //["Han", "Ece", "Ali", "Derya", "Deniz", empty × 2, "Sinan"]  olmayan indextekiler
