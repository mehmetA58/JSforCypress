//?? String

var myName = "Ali";
var myLesson = " JavaScript";

//consolda Ali knows JavaScript yazin

console.log(myName + " knows" + myLesson);
console.log(myName + " knows" + myLesson);

var message = myName + ` knows` + myLesson; //en iyi yontem
console.log(message);

//Consolda Ali 'knows' JavaScript yazin

console.log("Ali 'knows' JavaScript"); //hard code
console.log(myName + " 'knows' " + myLesson);

//BACKTICK
//Stringleri daha dinamik birlestirmek icin kullanilir

var message = `${myName} knows ${myLesson}`;
console.log(message); //Ali knows  JavaScript
