let s1="Akshay";
let s2='Pawar';

// console.log(s1);
// console.log(s2);

// console.log(`My first name is ${s1} and My Last name is ${s2}`)

// console.log(`Length of the string is:`+s1.length)
// console.log(`Length of the string is:`+s2.length)

// console.info(s1.concat(" ", s2, " How are you..."));

// console.log(s1.toUpperCase());

// console.log(s1);

let s3=s2.toUpperCase();

console.log(s3);
console.log(s2);

console.log(s1.slice(0,4));

console.log(s1.replace("A", "p"));

console.log(s1.charAt(3));

let s="Akshay Pawar How Are you";
let stringArray=s.split(" ");
console.log(stringArray.length);
console.log(stringArray)

for(let i=stringArray.length-1; i>=0;i--)
{
    console.log(stringArray[i]);
}


console.log(s.indexOf("wa"));
