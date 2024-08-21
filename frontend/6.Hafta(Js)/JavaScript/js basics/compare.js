/**
 * Karşılaştırma Operatorleri == === != !== ,> >= < <=
 * Karşılaştırma komutlatlar
 * if
 * ? ve ?? 
 * switch
 */

//operatorler
console.log(2==2);
console.log(2==="2"); //ek bir = operatorü trpe ofu da kontrol encodeURI.

//? operatorü
console.log( 5 == 5 ? "eşit":"değil");
console.log( 5 == 4 ? "eşit":"değil");


//?? karşılatırma operatorü
let x_ = null;
//let x_;
console.log(x_ ?? "nulldur");

x_ = 5;
console.log(x_ ?? "nulldur");

//if komutu
//if(true/false)
//else if()
//else

let age = 31;
if(age < 31)
    console.log(`yaş 31 den küçük`);
else if(age > 31)
    console.log(`yaş 31 den büyük`);
else
    console.log(`eşit`);


//switch
let harfNotu = "AA";
switch(harfNotu)
{
    case "AA": 
        console.log("pekiyi");
        break;
    case "BB": 
        console.log("iyi");
        break;
    default : 
        console.log("yanlış harf notu");
        break;
}

let hour = 15;
switch (true) {
    case (hour >= 0 && hour <=12):
        console.log("Günaydın");
        break;
    case (hour > 12 && hour <=17):
        console.log("iyi günler");
        break;
    case (hour > 17 && hour <=24):
        console.log("iyi akşamlar");
    break;
    default:
        break;
}