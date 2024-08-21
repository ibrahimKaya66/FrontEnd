//======= window
// console.log(this);
// console.log(window);

//======= window.alert
// window.alert('bu bir alert');
// alert('merhaba');


//======= window.confirm
// const cevap = confirm("Emin misiniz");
// console.log(cevap);
// if(cevap)
// {
//     console.log("silme işlemi gelecek");
// }

// if(confirm("Emin misiniz"))
// {
//     console.log("silme işlemi gelecek");
// }

//======= window.prompt
// const result = prompt(" 2 + 2 = ?");
// // const result = prompt(" 2 + 2 = ?","4");
// console.log(result + " tipi : "+ typeof result);

//======= window.location

// let value = location;
// console.log(value);

// let value = location.hostname;
// console.log(value);//...

// let value = location;
// console.log(value.hostname);//...

// if(confirm("Sayfa yenilensin mi?")){
//     location.reload();
// }

function itmhref()
{
    location.href="https://itmtechsoft.com/";

}

//===============Scope
//JavaScript'te "scope" (kapsam), değişkenlerin, fonksiyonların ve objelerin erişilebilir olduğu bağlamı ifade eder. 
//Scope, kodun belirli bir bölümünde tanımlanan değişkenlerin nerelerde erişilebilir olduğunu kontrol eder.
// JavaScript'te iki ana tür scope vardır: global scope ve local scope.
/**
 * 1-Global Scope
 * 2-Local Scope
 *  -Function Scope
 *  -Block Scope
 */
//Ör:

//global Scope
var a = 5;//global Scope
let b = 10;
const c = 15;
//
function x() {
    //function Scope
    var a = 6;
    let b = 12;
    const c = 18;

    console.log(a,b,c);
}
x();
console.log(a,b,c);


if(true) {
    //block scope
    var a = 7;
    let b = 14;
    const c = 21;

    console.log(a,b,c);
}
console.log(a,b,c);