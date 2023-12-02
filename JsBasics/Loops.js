//For repetative Actions Loops used.
//We have 3 lops...1.For 2.While  3.do-While

/*
//For Loop
for(let i=1;i<=10;i++)
{
    console.log(i);
}
console.log("--------------------");

//for ...of loop   (To Iterate Array)
const array=[1,5,7,8,9];
for(const e of array)
{
    console.log(e);
}
console.log("--------------------");

//Normal for Loop to iterate Array
for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}
*/

//While loop
//Used to iterate upto crtain conditions occurs.
/*
let number=1;
while(number<=10)
{
    console.log(number);
    number++;
}
*/

//do-while loop
//Used when we want to run our loop atleast once.
/*
let h=1;

do{
    console.log(h)
    h++;
}
while(h<=10)
*/
//break;   --To Break the loops after certain condition.
//for 1 to 100 numbers Print Hi when we see the multiplcation of 5 and break;
/*
let num=1;
while(num<=100)
{
    console.log(num);

    if(num%5==0)
    {
        console.log("Hi");
        break;
    }
    num++;
}
console.log("------------------------")

const browser=["Chrome", "FireFox", "Safari", "Edge"];
for(const e of browser)
{
    if(e=="Edge")
    {
        console.log("Launch Edge");
        break;
    }
}
console.log("------------------------")


//for ...in loop on Object

const user={
    "name":"Akshay",
    "age":25,
    "gender":"male",
    "city":"Bangluru"
}
console.log(user["name"])
for(const key in user)
{
    console.log(key);
}
*/

const numbers=[1,5,7,9];

numbers.forEach((number)=>
{
    console.log(number)
})
console.log("================================");
for(const e of numbers)
{
    console.log(e);
}
console.log("================================");
for(let i=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
}




