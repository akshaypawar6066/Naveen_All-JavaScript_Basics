//Premitive Data Types
/*
let a=10;
let b="Akshay";
let c=true;
let d=null;
let e;
let f=BigInt("567");
let g=Symbol("i am nice symbol");
console.log(a,b,c,d,e,f,g);

console.log(typeof f)
console.log(typeof e)
console.log(typeof d)
console.log(typeof g)
*/

//Non Premitive Data Types(objects)
//Objects are nothing but ket-value pair.
/*Object*/
/*
let iteam = {
    name:"Cosmetics",
    price: 20,
    quantity: 10,
    discount: 0.1,
    tax: 0.15,
    total: function(){
        console.log("This is function inside the iteam Object:")
    }   
}

iteam.colours= ["red", "blue", "Pink", "yellow"];

console.log(iteam);
iteam.total();
*/
/*
let user = {
 name:'Akshay',
 age:25,
 gender:"male",
 city:"Bangluru"
}

user.gmail="ABC@Gmail.com";
user["mobNo"]=9876543210;

console.log(user)

console.log(user["name"])
console.log(user["age"])
console.log(user.city);
user.hobbies=["Reading", "WatchingMovies", "Sleeping"];
console.log(user)

console.log(user.hobbies);
console.log(user.hobbies[1])
user["name"]="Danny";
console.log(user)

user.hobbies[1]="Murder";
console.log(user)
user["Hobbies"]="Activities";
console.log(user)
*/

///*Array/*
//Array is List Of Objects
/*
let language=["Java", "JS", "C#"];
console.log(language)
console.log(language.length)

language.push("Test");
console.log(language)

language[3]=function (){
    console.log("This is function inside the array:");
}
console.log(language)
language[3]();
language[4]=function test()
{
    console.log("This is test function:")
}
language[4]();
language[5]={
    name:"Akshay",
    age:35
}
console.log(language[5])

console.log(language)
*/

//Functions In JS
//Basic Function
// function getName(name , age)
// {
//    console.log("Here is name and age:"+name+" and "+ age)
// }
// getName("Akshay", 25);

/*
//Basic Function
var z;
function getName()
{
    console.log("This is basic function: created using function keyword and used function name:")
}

getName();

//FunctionWithParameters

function getNameAndAge(name, age)
{
    console.log("Your name is:"+name+" "+ "Your age Is:"+age)
}
getNameAndAge("Akshay",25);

function addTwoNo(a,b)
{
     z= a+b;
    console.log("Addition of two numbers are:"+z)
}
addTwoNo(200,400);


//Function Without name declaration(Anynomous function)

let test = function() {
    console.log("This is tge function without declaration of its name, simply assigned to some varaible:")
}

test();

//Parameterized Function Without name declaration(Anynomous function)

const alpha= function (alphaValue, alphaNo)
{
  console.log("Alpha value is:"+alphaValue+" "+"alphaNo is:"+alphaNo)
}

alpha("Alpha10",50)

//Declartion Function using Arrow Function.(Anynomous function);

let demo=()=>
{
    console.log("This is function created using Arrow:")
}

demo();

//Paramer=trized arrow function.

const gamma= (name , age)=>
{
  console.log("This one is Parmertrized arrow function:"+"Your name is:"+name +" and your age is:"+age);
}
gamma("Akshay",30)


*/

/*
let a=[2,5,9]
console.log(a)


a.push(100);
console.log(a)
a.pop();
console.log(a);

a.splice(2,0,18);
console.log(a);

a.splice(2, 2);
console.log(a);

*/

console.log("%c Hi Akshay How are you", "color: red; background-color: green; border: 1px solid");






















