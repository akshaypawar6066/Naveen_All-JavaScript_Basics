/*
class Test
{
    a=20;
    static b=20;
    nonStatictFunction()
    {
        console.log('This is a Non Static test Function')
    }

    static staticFunction()
    {
        console.log('This is a Static Test Function');
    }

}
const test=new Test();

console.log(test.a);
test.nonStatictFunction();

console.log(Test.b);
Test.staticFunction();

*/


class Test{

    constructor(id, name, sallery, email)
    {
        this.id=id;
        this.name=name;
        this.sallery=sallery;
        this.email=email;
    }

    test()
    {
        console.log("Your name is:"+this.name+" your email is:"+this.email+" Your sallery is:"+this.sallery+" Your id is:"+this.id);
    } 

}

const test=new Test(101,"Akshay","65L","ABC@gmail.com");

console.log(test.id);
test.test();


function demo()
{
    console.log("This is a demo function");
}

const alpha=function()
{
    console.log("This is a alpha function");
}

const arrowFunction=()=>
{
    console.log("This is an arrow function");
}

const c=20;
console.log(typeof c)
demo();
alpha();
arrowFunction();


