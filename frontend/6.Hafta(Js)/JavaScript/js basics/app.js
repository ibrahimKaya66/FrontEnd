//alert ve console.log

// alert("bu bir alert ");
console.log("console yazdıma");
console.warn("Bu bir uyarıdır");
console.error("Bu bir hatadır");
console.clear();

//var let farkı

var x= "testx";
var x = "testx2";

//let y = "testy";
//let y = "testy2";

// ========    Veriables

var str = "string değişken";
console.log(str);

yas = 25;// eğer değişken tipi belirtilmezse bir değer girildiğinde onun tipini alır.
console.log(yas);

//Değişken isimlendirmelerde Kurallar
/*
1-rakam ile başlayamaz
2-boşluk kullanılamaz özel karakter kullanılamaz(_ hariç)
3-komut kullanılamaz
4-türkçe'ye özgü karakterler kullanılamaz.ş,ç,ü...İ

*/

//const => sabit değişken oluşturmak için kullanılır.
const email = "ibrahim.kaya@gmail.com";


//let . let var gibi kullanılır genelde js de let kullanılmalıdır
let name = "ibrahim";
console.log(`tipi ${typeof name} değeri ${name}` );


// ========   Operatorler
/**
 * 1-Aritmetik Operatorler (+ - / * ++ --)
 * 2-Atama Operatorü (= += -= /= *= %=)
 * 3-Karşılaştırma Operatorü(== === != > < >= <=)
 * 4-Mantıksal Operatorler( veya => || ve => && not => !)
 */

//1-Aritmetik Operatorler
const a=5,b=4;
let toplam,fark,bolme,carpma,birartma,birazaltma;
let d = 3;

toplam = a + b;
fark = a - b;
bolme = a / b;
carpma = a * b;



console.log(`tipi ${typeof toplam} değeri ${toplam}` );
console.log(`tipi ${typeof fark} değeri ${fark}` );
console.log(`tipi ${typeof bolme} değeri ${bolme}` );
console.log(`tipi ${typeof carpma} değeri ${carpma}` );

birartma = ++d;
console.log(`birartma tipi ${typeof birartma} değeri ${birartma}` );
console.log(`d tipi ${typeof d} değeri ${d}` );

birazaltma = --d;
console.log(`birazaltma tipi ${typeof birazaltma} değeri ${birazaltma}` );
console.log(`d tipi ${typeof d} değeri ${d}` );


//== ve === farkı == de türe bakmadan eşit mi ona bakıyor === türe bakarak türü ve değeri eşit mi ona bakıyor


// ================Veri tİpi Dönüştürüm
// 1-String e dönüştürme => String() veya .toString()
//2-Number a dönüştürme => Number() veya parseInt() parseFloat() gibi

// ================ Zaman(Date) Objeleri 

// Şu anki tarih ve saati alır
let currentDate = new Date();
console.log(`Current Date: ${currentDate}`);

// Belirli bir tarih ve saati alır (Yıl, Ay, Gün, Saat, Dakika, Saniye, Milisaniye)
let specificDate = new Date(2023, 6, 29, 15, 30, 0, 0); // Aylar 0'dan başlar (0 = Ocak, 6 = Temmuz)
console.log(`Specific Date: ${specificDate}`);

// Yıl, Ay ve Gün belirterek tarih alır
let ymdDate = new Date(2023, 6, 29); // Aylar 0'dan başlar (0 = Ocak, 6 = Temmuz)
console.log(`Year-Month-Day Date: ${ymdDate}`);

// Milisaniye cinsinden zaman damgasını (timestamp) kullanarak tarih alır
let timestampDate = new Date(1672531200000); // 1672531200000 milisaniye
console.log(`Timestamp Date: ${timestampDate}`);

// ISO 8601 tarih dizesini kullanarak tarih alır
let isoDate = new Date('2023-07-29T15:30:00Z');
console.log(`ISO Date: ${isoDate}`);

// RFC 2822 tarih dizesini kullanarak tarih alır
let rfcDate = new Date('July 29, 2023 15:30:00');
console.log(`RFC Date: ${rfcDate}`);


//Date get metotları
console.log(`getMonth : ${currentDate.getMonth()}`);
console.log(`getFullYear : ${currentDate.getFullYear()}`);
console.log(`getHours : ${currentDate.getHours()}`);
console.log(`getMinutes : ${currentDate.getMinutes()}`);
console.log(`getSeconds : ${currentDate.getSeconds()}`);

//Date set metotları
currentDate = new Date();
currentDate.setFullYear(2025);

console.log(`Current Date: ${currentDate}`);


//Numbers
let number = Number("5");
console.log(number);

console.log(`parseInt ${parseInt("5")}`);
console.log(`parseFloat ${parseFloat("5.5")}`);
console.log(`5c parseInt ${parseInt("5c")}`);
console.log(`c5 parseInt ${parseInt("c5")}`);
console.log(`c5 isNaN ${isNaN("c5")}`);

let number2 = 15.556646646;
console.log(`toFixed(2) ${number2.toFixed(2)} typeof : ${typeof number2.toFixed(2)}`);
console.log(`Math.round ${Math.round(number2)} typeof : ${typeof Math.round(number2)}`);
console.log(`toPrecision(2) ${number2.toPrecision(2)}`);
console.log(`toPrecision(3) ${number2.toPrecision(3)}`);

//Math metotları
console.log(`pi ${Math.PI}`);
console.log(`round ${Math.round(5.5)}`);
console.log(`ceil ${Math.ceil(5.1)}`);
console.log(`floor ${Math.floor(3.6)}`);
console.log(`pow ${Math.pow(3,3)}`);
console.log(`sqrt ${Math.sqrt(9)}`);
console.log(`abs ${Math.abs(-50)}`);
console.log(`min ${Math.min(1,4,6,8)}`);
console.log(`max ${Math.max(1,4,6,8)}`);
console.log(`random ${Math.random()}`);//Math.random()} 0 ile 1 arası sayı üretir
console.log(`0-10 ${Math.round(Math.random()*10)}`);


//String Metotlar

let firsname = 'ibrahim';
let lastname = 'kaya';

console.log(firsname.length);//uzunluğu
var fullname = firsname.concat(` ${lastname}`);//concat : birleştirme
console.log(fullname);

console.log(firsname.toLowerCase());//küçük harfe dönüştürme
console.log(firsname.toUpperCase());//büyük harfe dönüştürme

console.log(fullname.substring(3,6)); //start index end index
console.log(fullname.slice(3,6)); //start index end index

//substrin ile slice farkı
/**
 * substring negatif indexleri 0 kabul eder,slice negatif indexleri kabul eder. stringin sonundan itibaren pozisyon kabul eder(string sonu  kabul eder geri geri -1, diye gider)
 * substring de endindex > startindex olmalıdır büyük değilse yer değiştirir. slice da startIndex > endIndex olduğunda boş bir string döner.
 */


console.log(firsname.indexOf('h'));//karakterin indexini bulma
console.log(fullname.replace(`ibrahim`,`emrah`));

console.log(fullname.split(` `));//karaktere göre ayır diziye at
console.log(firsname.charAt(3));//parametre olarak verilen indexteki karakteri getir

console.log(fullname.includes("kaya"));//parametre degirilen değer string de var mı varsa true dön


//============Array

const names = [`ibrahim`,`emrah`,`seda`];
console.log(names);

const dynamic = [`sdaf`,12,14.5,null,NaN,undefined,[`fghf`,12]];
console.log(dynamic);
let lenght = names.length;

//get item
let value = names[0];
value = names[1];

//set item
names[0] = `test`;

//add item
names.push(`ali`);//listenin sonuna ekler
names.unshift(`eda`);//listenin başına ekler

//remove item
// names.pop();//son eleman siler
// console.log(names.pop());

// names.shift();
// names.splice(0,3);//start index ,delecount
names.splice(3,0,"sdfsd");//start index,delecount,insert item

//sıralama

names.sort();
console.log(names);

names.sort((a,b) => {
    if(typeof a == "string" && typeof b == "string")
        return b.localeCompare(a);
    else
        b-a;
});
console.log(names);

//object literals json formatında dizi
const programmer = {
    name:"ibrahim",
    surname : "kaya",
    age:31,
    email:"ibrahim@gmail.com",
    langs:["html","css","js"],
    adress:{
        city:"İstanbul",
        district:"Esenyurt"
    },
    work:()=>{console.log("itm de senior software deeloper")}
};

console.log(programmer);
console.log(programmer.adress.city);
console.log(programmer.surname);
console.log(programmer.work());

