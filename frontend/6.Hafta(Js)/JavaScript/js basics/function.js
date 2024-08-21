//function metotlar

function Merhaba(){
    console.log("merhaba");
}
// function Fullname(name,surname){
//     console.log(`ad : ${name} soyad: ${surname}`);
// }

// function Fullname(name,surname)
// {
//     if(typeof name == "undefined")
//         name = "ibrahim"
//     if(typeof surname == "undefined")
//         surname = "kaya"

//     console.log(`ad : ${name} soyad: ${surname}`);
// }

function Fullname(name = "ibrahim",surname = "kaya")
{

    console.log(`ad : ${name} soyad: ${surname}`);
}
Merhaba();
Fullname("ibrahim","kaya");
Fullname();

// function Square(a)
// {
//     return a*a;
// }
// let x= 5;
// x= Square(a);


// let x = function Square()
// {
//     return 5*5;
// }
// console.log(x());

let x = function Square()
{
    return 5*5;
}();
console.log(x);

//Immediately invoked function expression(IIFE)

(function Merhaba2(name){
    console.log(`merhaba ${name}`);
})("ibrahim");

(function Merhaba2(name){
    console.log(`merhaba ${name}`);
})("ibrahim");

((name) => {
    console.log(`merhaba ${name}`);
})("test");

var takım = "gs"
var mesaj = ((value) => {
    return `ben ${value} takımı tutuyorum`;
})(takım);

console.log(mesaj);


const database = {
    host:"localhost",
    add:(item)=>{console.log(`${item} eklendi`)},
    delete:(item)=>{console.log(`${item} silindi`)},
    update:(id,item)=>{console.log(`${id} id li ${item} güncellendi`)},
    get:(id=null)=>{id != null ? console.log(`${id} li eleman getirildi`): console.log("tüm liste getirildi")}
}

database.add(3);
database.update(1,4);
database.delete(2);
database.get();
database.get(4);