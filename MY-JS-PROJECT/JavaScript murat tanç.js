DAY 1: JAVASCRIPT
=================================================================

console.log("Hello World")
console.log("%cHello World", "color : blue; font-size: large")
console.log("%cHello World", "color : red; font-size: x-large")
console.log("%cHello World", "color : yellow; font-size: xx-large")
console.log("%cHello World", "color : brown; font-size: xxx-large")

%c --> CSS stil kurallarini uygular. ("color : blue; font-size: xxx-large")

________________________________________________________________

Degiskemler (Variables)

var: degeri degisebilir, global scope

let: degeri degisebilir, functional scope

const: degeri değismez, functional scope


var myName = 'JavaScript'
console.log(myName)         //JavaScript
myName = 'Java'
console.log(myName)         //Java

let myAge = 30
console.log(myAge)          //30
myAge = 35
console.log(myAge)          //35

const myFavNum = 8
console.log(myFavNum)       //8
//const myFavNum = 10
//console.log(myFavNum)

var employees = ["Ali", "Can", "Ece"]
console.log(employees)      //["Ali", "Can", "Ece"]

________________________________________________________________

Veri Cesitleri (Data Type)
================================================================

String: ' ' , " " , ` `
Number: int, double, ...
Boolean: true, false
Undefined: degeri atanmamis, tanimsiz
Null: bos deger anlamına gelen ozel bir degerdir

typeof --> Degiskenin turunu verir


var myName = 'JavaScript'
console.log(typeof(myName))         //string

var myName = 30
console.log(typeof(myName))         //number

var myName = true
console.log(typeof(myName))         //boolen

var myAge
console.log(typeof(myAge))          //undefined

var myFavCar = null
console.log(myFavCar)               //null

________________________________________________________________

String
================================================================

var myName = 'Ali'
var myLesson = 'JavaScript'

//print : Ali knows JavaScript
var message = myName + ' knows ' + myLesson
console.log(message)

//print : Ali knows 'JavaScript'
console.log("Ali knows 'JavaScript'")       //Hard Code
console.log(myName+ ' knows ' + "'" + myLesson + "'")

// BACKTICK (``)
// Stringleri daha dinamik bir sekilde birlestirmek icin kullanilir.
// ${variable}
var newMessage = `${myName} knows '${myLesson}'`
console.log(newMessage)

________________________________________________________________


FONKSİYON TANIMLAMA
=================================================================

function fonksiyonisim (parametre1, parametre2, ...){
	return donusDegeri
}
fonksiyonisim()		//Fonksiyonu Cagirma


1. Parametresiz Fonksiyon

function greet(){
    console.log('Hi !!!')
}
greet()			     //Hi !!!
________________________________________________________________


2. Parametreli Fonksiyon
function greetPeople(nameOfPeople){
    console.log('Hi ' + nameOfPeople)
}

greetPeople('Ali')          //Hi Ali
greetPeople(false)          //Hi falsee
greetPeople(20)             //Hi 20
greetPeople()               //Hi undefined
greetPeople(null)           //Hi null
greetPeople('Can', 'Ece')   //Hi Can
________________________________________________________________


3. Birden fazla parametreli fonksiyon

function information(location, price, schoolRating){
    console.log(`
    Location : ${location}. 
    Price : ${price}. 
    School Rating : ${schoolRating}`)
}
information('New York', '70000', 'A+')

Parametere      |   Arguman/Deger
location        |   New York
price           |   70000  
schoolRating    |   A+
________________________________________________________________


Examples:

function sum(){
    var num1 = 10
    var num2 = 20
    var num3 = 30
    var total = num1 + num2 + num3
    return total
}
console.log(sum())          //60
________________________________________________________________



DAY 2: JAVASCRIPT
================================================================

//Fonksiyonu cagirip yeni bir degiskende saklamak
const mySum = sum() + 100 + 1
console.log(mySum)
________________________________________________________________

//Fonksiyonu parametre ve return ile cagirmak
function diff(num1, num2){
    return num1-num2
}
console.log(diff(100, 50))       //50
________________________________________________________________

//Fonksiyonu cagirip yeni bir degiskende saklamak
const result = diff(100,50)
console.log(result)
________________________________________________________________


*Fonksiyonları 2 sekilde tanimlayip cagirabilirsiniz
1. Direk tanimlamak ve cagirmak
2. Fonksiyonu bir degisken ile tanimlayip cagirmak

function square(num){
    return num*num
}
console.log(square(8))      //64


const squareOfNumber = function square(num){
    return num*num
}
console.log(squareOfNumber(8))
________________________________________________________________


function product(num1=10, num2=3){
    return num1 * num2
}
console.log(product())          //30 default product
console.log(product(10,5))      //50 (overriding both numbers)
console.log(product(100))       //300 (overriding first number)
________________________________________________________________


* Fonksiyonu tanimladiktan sonrada ve oncede cagirabilirsiniz

add(5,5)                //10
function add(a,b){
    console.log(a+b)
}
add(4,5)                //9
________________________________________________________________

Anonymous Function (isimsiz)

Anonymous function olusturma

function(a,b,c){    
    return a+b+c
}
//Uncaught SyntaxError: Function statements require a function name

Uncaught SyntaxError hatasini olmamak icin
fonksiyona container ekliyoruz.

var result = function(a,b,c){
    return a+b+c
}
console.log(result(2,3,6))
________________________________________________________________

let info = function(fName, lName, age){
    console.log(fName + ' ' + lName + ' ' + age)
}

/* yukarıdaki ve asagidaki kodun teknik olarak bir farkı yok
function info (fName, lName, age){
   console.log(fName + ' ' + lName + ' ' + age)
}
*/
info('Ali', 'Can', 40)

________________________________________________________________

ARROW FUNCTIONS
================================================================

//Traditional Funtion
function sum(a){
    return a + 100
}
console.log(sum(10))        //110

//Anonymous Function

var newSum = function (a) {
    return a +100
}
console.log(newSum(11))     //111 


Fonksiyonları Arrow fonksiyona donusturme (Tek parametreli)
================================================================

1. function kelimesini ve fonksiyonun ismini sil
2. parametre ve body arasına => koy

var arrow = (a) => {
    return a + 100
}
console.log(arrow(12))      //112


3. {} ve return kelimesini sil.

var arrow = (a) => a + 100
console.log(arrow(13))      //113


4. argumentin parantezini sil. Tek argument Variables
var arrow = a => a + 100
console.log(arrow(14))      //114


Fonksiyonları Arrow fonksiyona donusturme (Birden fazla parametreli)
====================================================================

Traditional Function
function sum(a,b){
    return a+b+100
}
console.log(sum(1,2))       //103

//Anonyms Function
var newSum = function (a,b){
    return a+b+100
}
console.log(newSum(2,3))       //105


1. function kelimesini ve fonksiyonun ismini sil
2. parametre ve body arasına => koy

var arrow = (a,b) =>{
    return a+b+100
}
console.log(arrow(3,4))       //107


3. {} ve return kelimesini sil.

var arrow = (a,b) => a+b+100
console.log(arrow(4,5))       //109
________________________________________________________________


Parametresiz Fonksiyonları Arrow fonksiyona donusturme
======================================================

//Traditional Function

var a=5, b= 6
function sum(){
    return a+b+100
}
console.log(sum())          //111

//Anonymous Function
a=6
b=7
var newSum = function(){
    return a+b+100
}
console.log(newSum())       //113


1. function kelimesini ve fonksiyonun ismini sil
2. parametre ve body arasına => koy

a=7
b=8
var arrow = () =>{
    return a+b+100
}
console.log(arrow())       //115


3. {} ve return kelimesini sil.

a=8
b=9
var arrow = () => a+b+100
console.log(arrow())       //117

Example:
//Prizmanın Hacim hesabi
//1. Yol

var prism = function(l, w, h){
    return l * w * h
}
console.log(prism(1, 2, 3))

//2. Yol
function prism1 (l) {
    return function(w) {
        return function(h) {
            return l * w * h
        }
    }
}
console.log(prism1(2)(3)(4))

//3.Yol
var prism2 = l => h => w => l * w * h
console.log( prism2(3)(4)(5))




OBJECT { }
======================================================

Objectler data kaydetmek icin kullanilir.
{ } ile olusturulur

var fName = 'Ali'
var lName = 'Can'
var age = 25
var information = `${fName} ${lName} ${age}`
console.log(information)
//Ali Can 25

person object olusturma

var person = {
    fName: 'Ali',
    lName: 'Can',
    age: 25,
    isEmployed: true
}
console.log(person)
//{fName: "Ali", lName: "Can", age: 25, isEmployed: true}

console.log(typeof(person))     //object

//1) Calling the information . notation
console.log(person.fName)           //Ali
console.log(typeof(person.fName))   //string
console.log(person.lName)           //Can
console.log(person.age)             //25
console.log(typeof(person.age))     //number

//2) Calling the information [] notation
console.log(person['fName'])        //Ali
console.log(person['age'])          //25
console.log(person['isEmployed'])   //true

//Editting Object
//1. Using . notation

person.fName = 'Veli'
person.lName = 'Tan'
console.log(person)

//age: 25
//fName: "Veli"
//isEmployed: true
//lName: "Tan"

//2. Using [] notation

person['age'] = 60
person['isEmployed'] = false
console.log(person)

//age: 60
//fName: "Veli"
//isEmployed: false
//lName: "Tan"


NESTED OBJECT
======================================================

/*
fName : Ali         -> String
age : 20            -> Number
isEmployed : true   -> Boolean
address: street = 590 Madison Ave, city = NYC, state = New York -> OBJECT
hobbies : swimming, running, hunting ->ARRAY    
*/

const person = {
    fName : 'Ali',
    age : 20,
    isEmployed : true,
    address : {
        street : '767 5th Ave',
        city : 'NYC',
        state : 'New York'
    },
    hobbies : ['swimming', 'running', 'hunting']
}

//Calling
console.log(person)
console.log(person.fName)           //Ali
console.log(person.isEmployed)      //true
console.log(person.age)             //20
console.log(person.address)
//city: "NYC"
//state: "767 5th Ave"
//street: "New York"

console.log(person.address.city)    //NYC
console.log(person.address.street)  //767 5th Ave
console.log(person.address.state)   //New York

console.log(person.hobbies)         //["swimming", "running", "hunting"]
console.log(person.hobbies[0])      //swimming
console.log(person.hobbies[1])      //running
console.log(person.hobbies[2])      //hunting

console.log(person.fName + ' | ' + person.address.city + ' | ' + person.hobbies[0])
//Ali | NYC | swimming


ARRAYS
======================================================
/*
Collection of elements
Arrays are special type of Object
We use index to read arrays
*/

//Declaring Array
var frienList = ['Can', 'Ece', 'Ali', 'Naz' ]
var frienList1 = new Array ('Can', 'Ece', 'Ali', 'Naz')

//Reading the Array
console.log(frienList)      //["Can", "Ece", "Ali", "Naz"]
console.log(frienList1)     //["Can", "Ece", "Ali", "Naz"]
console.log(frienList[0])   //Can
console.log(frienList[4])   //undefined (data yok)

//Editing Array
//Change Can -> Han

frienList[0] = 'Han'
console.log(frienList)      //["Han", "Ece", "Ali", "Naz"]

frienList[3] = 'Derya'
console.log(frienList)      //["Han", "Ece", "Ali", "Derya"]

//Adding new value in the array
frienList[4] = 'Deniz'
console.log(frienList)      //["Han", "Ece", "Ali", "Derya", "Deniz"]

frienList[7] = 'Sinan'
console.log(frienList)
//["Han", "Ece", "Ali", "Derya", "Deniz", empty × 2, "Sinan"]
//When you try to add data in array, WE SHOULD AVOID USING INDEX
//WE SHOULD USE ARRAY METHODS TO ADD DATA















ARRAY E DATA EKLEME ve SiLME
======================================================

//Declaring Array
var friendList = ['Can', 'Ece', 'Ali', 'Naz' ]
console.log(friendList)                 //["Can", "Ece", "Ali", "Naz"]
console.log(typeof(friendList))         //object

//ADDING TO ARRAY
// 1) push() --> Array'in sonuna data ekler
friendList.push('Sinan')
console.log(friendList)                 //["Can", "Ece", "Ali", "Naz", "Sinan"]

//2) unshift() --> Array'in basina data ekler
friendList.unshift('Derya')
console.log(friendList)                 //["Derya", "Can", "Ece", "Ali", "Naz", "Sinan"]

//DELETING FROM ARRAY
// 3)pop() --> son data'yi siler.
friendList.pop()
console.log(friendList)                 //["Derya", "Can", "Ece", "Ali", "Naz"]

// 4) shift() --> ilk datay'i siler.
friendList.shift()
console.log(friendList)                 //["Can", "Ece", "Ali", "Naz"]


var ages = [10, 20, 30, 40, 50, 30, 60, 30]

// 5) indexOf(item, from) --> return 1st index of item

console.log(ages.indexOf(20))       //1
console.log(ages.indexOf(50))       //4


//index 3'ten basla ve sonraki 30'un index'ini ver
console.log(ages.indexOf(30,3))     //5

// retturn -1 if there is no matching number
console.log(ages.indexOf(20,3))     //-1
console.log(ages.indexOf(8))        //-1


// 6) lastIndexOf( ) --> return last index of the item
console.log(ages.lastIndexOf(30))   //7


// 7) includes(item, starting index):
//return true if item is inside the aray
//return false otherwise

console.log(ages.includes(60))      //true
console.log(ages.includes(70))      //false

const isExist = ages.includes(40, 3)
console.log(isExist)                //true


const isExist1 = ages.includes(80, 3)
console.log(isExist1)                //false


// 8) splice() --> yeni eleman ekleme, kaldirma, mevcut elemaları degistirme
// splice(baslangic, silinecek deger sayisi, item)
const months = ['Jan', 'March', 'April', 'June']

console.log(months)            //["Jan", "March", "April", "June"]

months.splice(1, 0, 'Feb')
// splice(1, 2, 'Feb') 1 --> 1. indexe ekleyeceksin
//                     0 --> 0 elemani sil
//                     'Feb' --> 1. index'e Feb ekle

console.log(months)            //["Jan", "Feb", "March", "April", "June"]


months.splice(4, 1, 'May')
// 4. index'e May ekle, ekledikten sonraki 1 elemani sil
console.log(months)        //["Jan", "Feb", "March", "April", "May"]


months.splice(5, 0, 'June', 'July', 'August')
//5. index'e 'June', 'July', 'August' ekle. eleman silme
console.log(months)
//["Jan", "Feb", "March", "April", "May", "June", "July", "August"]

months.splice(5, 3)     //index 5 ve index 5'den sonra 3 item'i sil
console.log(months)     //["Jan", "Feb", "March", "April", "May"]

//Note: - sayı son index demektir
// -1 = son index
// -2 = son 2 index

months.splice(-1)       //son index'i sil     
console.log(months)     //["Jan", "Feb", "March", "April"]

months.splice(-3)       //son 3 index'i sil     
console.log(months)     //["Jan"]

months.splice(1, 0, 'Feb', 'March', 'May', 'June', 'July', 'August')
console.log(months)     //["Jan", "Feb", "March", "May", "June", "July", "August"]

//9) slice(startIndex(dahil), endIndex(haric))
console.log(months.slice(2))        //["March", "May", "June", "July", "August"]
//index'i 2 olandan sonrakileri getir

console.log(months.slice(-2))       //["July", "August"]
//son iki elemani getir

console.log(months.slice(2,5))      //["March", "May", "June"]
//index'i 2 olandan sonra, index 5'e kadar getir.



//10) concat --> Arrayleri birlestirir.
var drinks = ['coke', 'water', 'fanta', 'ayran']
var kebaps = ['adana', 'urfa', 'ciger', 'patlican']

var shoppingList = drinks.concat(kebaps)
console.log(shoppingList)
//["coke", "water", "fanta", "ayran", "adana", "urfa", "ciger", "patlican"]

//11) reverse() -->Array'i ters cevirir
var nums = [1, 2, 3, 4, 5, 6, -7, -8]
console.log('Orjinal List : ' + nums)      //Orjinal Liste : 1,2,3,4,5,6,-7,-8
nums.reverse()
console.log('Reversed List : ' + nums)     //Reversed List : -8,-7,6,5,4,3,2,1

//12) sort() --> kucukten buyuge siralar
nums.sort()
console.log('Ascending : ' + nums)          //Ascending : -7,-8,1,2,3,4,5,6

//buyukten kucuge nasil yapariz
//sort + reverse
nums.reverse()
console.log('Decending :' + nums)           //Decending :6,5,4,3,2,1,-8,-7




LOOPS
======================================================
//loop can be use iterate the arrays

//1) For Loop
for(let i = 0; i<=5; i++){
    console.log(i)
    }

//2) For of loop
FOR .... OF LOOP

const iterable = [0, 1, 2, 3, 4, 5];
for (let a of iterable) {
console.log(a);
}
    
//creating an array of object that has 3 objects
const todo = [
    {
        id:1,
        task: 'meeting',
        isComplate: true
    },
    {
        id:2,
        task: 'doctor appt',
        isComplate: true
    },
    {
        id:3,
        task: 'shopping',
        isComplate: true
    }
]
    console.log(todo)               //[{…}, {…}, {…}]
    console.log(todo[0])            //{id: 1, task: "meeting", isComplate: true}
    console.log(todo[0].task)       //meeting
    
    //loop to itarate the array
    
    for( let i = 0; i < todo.length; i++){
        console.log(todo[i].id)
        console.log(todo[i].task)       //meeting, doctor appt, shopping
        console.log(todo[i].isComplate)
    }

    for (let i of todo) {
        console.log(i);
    }


//3) For EACH

/*
forEach loop'ta function'i parametre olatak kullanabiliriz. for loop'larda olamz
forEach (Function) : this will loops the fuction items
*/

const myArray = [1, 2, 3, 4]

myArray.forEach(
    function(eachItem){         //eachItem represents single items of myArray
        console.log(eachItem)   //1,2,3,4
    }
)

//we can make the code shorte using arrow funtions

myArray.forEach(eachItem => console.log(eachItem))      //eachItem variable


//Print all items from the list using for Each

var todoList = ['shop', 'eat', 'drink', 'play']
todoList.forEach(each => console.log(each))             //each variable



MAP
======================================================
//Map: create a new array by doing something with each item in array
//cok kullanislidir.

var originalArray = [2, 4, 6, 8, 10]

//create a function

//1) we define the function and call it in the map function
function double(x){
    return x*2
}
//mapping original array to double function and create a new array
const newArray = originalArray.map(double)
console.log(newArray)           //[4, 8, 12, 16, 20]


//2) short way. we can use function inside a map directly
const newArray1 = originalArray.map(
    function double(x){
        return x*2
    }
)
console.log(newArray1)          //[4, 8, 12, 16, 20]


//3) short way with arrow function. We can use arrow function in a map directly
const newArray2 = originalArray.map(x=> x*5)
console.log(newArray2)          //[10, 20, 30, 40, 50]

Filter
======================================================
//fiter()

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


//get number only greater than 10
const filteredNumber = numbers.filter(
    function(eachNum){
        return eachNum > 10
    }
)
console.log(filteredNumber)         //[11, 12, 13, 14, 15]

//short way
const filteredNumber1 = numbers.filter(eachNum => eachNum >10)
console.log(filteredNumber1)

// tek sayilari filtrele
let tek = numbers.filter(n => n % 2 !== 0)
console.log(tek)                //[1, 3, 5, 7, 9, 11, 13, 15]

//cift sayilari filtrele
let cift = numbers.filter(n => n % 2 == 0)
console.log(cift)               //[2, 4, 6, 8, 10, 12, 14]

//filter() Arrays
var people = [{
    id: 1,
    name: "John",
    age: 28
    }, {
    id: 2,
    name: "Jane",
    age: 31
    }, {
    id: 3,
    name: "Peter",
    age: 55
    }]

let young = people.filter(person => person.age < 35)
console.log(young)


filter(), findIndex()
======================================================

//find() return the first item that matches the condition

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//return the first number is greater than 10
const myNumbers = numbers.find(
    (eachNum) => eachNum>10
)
console.log(myNumbers)      //11

//findIndex() return the first index of item that matches the condition

const myIndex = numbers.findIndex(
    eachNum => eachNum > 10
)

console.log(myIndex)