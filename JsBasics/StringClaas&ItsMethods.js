////////////String////////////////////////////////
/*
const str1="Akshay";
console.log(str1);
console.log(str1.length);

console.log("--------------------------------");
const str2='Boss';
console.log(str2);
console.log(str2.length);

console.log(str1.charAt(5));

console.log("--------------------------------");


let boy1="Nikhil";
let boy2="Pramod";
//Nikhil is a friend of pramod.
let sentence=`boy1 is a friend of boy2`;
console.log(sentence);

console.log("--------------------------------");

let nSenetence=`${boy1} is a friend of ${boy2}`;

console.log(nSenetence);

console.log(boy1 +" is a friend of"+" "+boy2);


let s=`Akshay is my "good" frienf`

console.log(s);
console.log("I am \n tester person");
*/

//String Methods
//1.length   ---->To check length of the string
let s="Akshay";
console.log(s.length);

//2.toUpperCase() ---> To Convert given string to upper case
console.log(s.toUpperCase());

//3.toLowerCase() ---> To Convert given string to lower case
console.log(s.toLowerCase());

//4.slice()----> to print the part of the String from starting index and last index will not be included.

console.log(s.slice(0,4));   //From o index to 3rd(4th index not included);
console.log(s.slice(3))     //Starting frpm rd index to last index.


//5 replace() ---> TO replace come charcaters of the string with other.(It will replace first occurance).
// let string="I Love My India";
// let s2=string.toLocaleLowerCase()
// let l1=s2.length;
// console.log(s2);
//6.reolaceAll()--->It will replace all the occurances.
// let s3=s2.replaceAll("i", "");
// let l2=s3.length;
// console.log(s3);

// console.log("occurance of I is:"+(l1-l2));

//7.trim()---->To remove the starting and ending spaces from the string.
/*
let name="    Akshay    ";
console.log(name);
console.log(name.length)

let nString=name.trim();
console.log(nString);
console.log(nString.length);


//8.concat()---->To join two or more strings.
let s1="Akshay";
let s2="Pawar";
console.log(s1.concat(" ia a name and his sirname is:",s2, " How are you"));

*/

//9.split()---->To split the string into an array.
let string="Akshay is my friend";
let stringArray=string.split(" ");
console.log(stringArray);


//10.indexOf()  ---->To get the index of perticular charcaters in string.
console.log(string.indexOf("my"));
//11. charAt() ---->To get the character at perticular index;
console.log(string.charAt(5));


let test="Akshay";
let demo="";
for(let i=test.length-1; i>=0;i--)
{
    demo=demo+test.charAt(i);
}
console.log(demo);



