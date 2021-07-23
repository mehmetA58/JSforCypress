//?? veri çeşitleri (Data Type)

String: ' ',   " ",   ` `(backtick)
Number: int,....
Boolean: true, false
null: null da ise deger null olarak belirlenmistir
undefined: undefined olunca daha sonra deger atanacak anlaminda

null ile undefined farki : 
- undefined daha sonra deger atanacak anlaminda kullanilir.
- Atanmamis degiskenlerin degeri js tarafindan otomatik olarak undefined olarak atanir.
- null bos deger anlamina gelir.
*/
var myName = "JavaScript";
console.log(typeof myName); //string

let myAge = 35;
console.log(typeof myAge); //number

var myName = true;
console.log(typeof myName); //boolean

var myCar = null;
console.log(typeof myCar); //object
