//*8) splice(): yeni data ekleyebiliroruz, kaldirabiliyoruz mevcut datayi degistirebiliyoruz

const months = ["Jan", "March", "April", "June"];
console.log(months); //["Jan", "March", "April", "June"]

months.splice(1, 0, "Feb");
//1:  1. index e ekle   0: herhangi birseyi silme  Feb : Feb i 1. index e ekle
//silmeden 1.index e eleman eklemek  yani array i kaydirarak

console.log(months); // ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// 4 : 4. index e ekle   1: ekledikten sonra sil  May : May i 4. index e ekle

console.log(months); // ["Jan", "Feb", "March", "April", "May"]

months.splice(5, 0, "June", "July", "August");
//5. index e silmeden "June", "July", "August" ekle

console.log(months); //["Jan", "Feb", "March", "April", "May", "June", "July", "August"]

months.splice(5, 3);
//%. index den sonra 3 tane sil
console.log(months); //["Jan", "Feb", "March", "April", "May"]

//!- -1 : son index   -2 : son 2 index denektir..

months.splice(-1);
console.log(months); //["Jan", "Feb", "March", "April"]

months.splice(-2);
console.log(months); //["Jan", "Feb"]

months.splice(2, 0, "March", "April", "May", "June", "July", "August");
console.log(months); //["Jan", "Feb", "March", "April", "May", "June", "July", "August"]

//*9) slice(startIndex(dahil), endIndex(haric)) : silme degistirme icin
// ! Tek rakam başlangıç indeksini gösterir.    o index den sonrakileri getir..oncesi sil gibi

//atama yapmadigimiz icin  slice methodu kalici degisiklik yapmiyor
//son datamiz : ["Jan", "Feb", "March", "April", "May", "June", "July", "August"]

console.log(months.slice(2)); //["March", "April", "May", "June", "July", "August"] ilk 2 index i sil

console.log(months.slice(-3)); // ["June", "July", "August"]  son 3 datayi getir..

console.log(months.slice(2, 5)); // ["March", "April", "May"]
//2: index 2 dahil
//5: index 5 haric
