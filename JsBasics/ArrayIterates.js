let arr=[45,45,987,7484,485,451445,845,54]
//1.Basic for loop
/*
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
*/
//2.For of loop
/*
for(const e of arr)
{
    console.log(e)
}
*/

//3.For In Loop
/*
for(const e in arr)
{
    console.log(arr[e])
}
*/

//Object iteraation
/*
const user={
    name:"Akshay",
    age:20,
    city:"Bangalore"
}

for(const key in user)
{
    console.log(key+":"+user[key])
}
*/

function test(name)
{
    console.log("Your name is:"+name);
}

function test(name, age)
{
    console.log("Your name is:"+name);
    console.log("Your age is:"+age);
}

test("Akshay");