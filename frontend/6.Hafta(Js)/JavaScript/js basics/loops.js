//Döngüler
/**
 * 1-While
 * while(kosul){
 * }
 * 2-Do-while
 * do{
 * }while(kosul);
 * 3-for
 * for(let i = 0;i<N ; i++)
 * {
 * }
 * 4- for in 
 * for(let key/value in maparray)
 * 5-for of 
 * for(let item of array)
 * 
 * 5-Array,map array foreach
 */

//Döngü içinde kullanılan komutlar break , continue
/**
 * break : döngüden çıkar
 * continue : döngüye tekrar baştan  girer
 */

// let i = 0;
// while(i<10)
// {
//     console.log(i);
// }

// let i = 0;
// while(i<10)
// {
//     if(i == 3)
//         break;
//     console.log(i);
//     i++;
// }

// let i = 0;
// while(i<10)
// {
//     if(i == 3)
//         continue;
//     console.log(i);
//     i++;
// }

//Array foreach
const langs = [`JavaScript`,`C#`,`Java`,`Python`];
langs.forEach((lang,index) => {
    console.log(lang,index);
})

langs.forEach((lang,index,langs) => {
    console.log(lang,index,langs);
})

// const langs = [`JavaScript`,`C#`,`Java`,`Python`];
// langs.forEach(function(lang,index) {
//     console.log(lang,index);
// })

//Array maps

const users = 
[
    { name : "ibrahim",age : 31},
    { name : "emrah",age : 28},
    { name : "seda",age : 24},
]


const names =  users.map((user)=>{
    return user.name;
});

console.log(names);

for(let key of users)
{
    console.log(`key : ${key}\n Value : ${JSON.stringify(users[key])}`);
}


for(let key in users.keys)
    {
        console.log(`key : ${key}\n Value : ${JSON.stringify(users[key])}`);
    }

for(let value in users.values)
    {
        console.log(`key : ${key}\n Value : ${JSON.stringify(users[key])}`);
    }


//ör:dizinin kareesinmi alanıp tekrar diziye atayalım

let numbers = [2,5,8,10];

numbers = numbers.map((value)=>{return value*value});
console.log(numbers);