//For usin Variables in the String literals
const name="Akshay";
const age=25;

console.log(`My Name is ${name} and My ag is ${age}`);

//For Printing Paragraphs
const message=`Hi, I am Akshay,
                             I am learning JS and I am Happy`;
console.log(message);

//For Mathematicla Expressions

const a=20, b=40;
console.log(`Addition of ${a} and ${b} is: ${a+b}`);


console.log("--------------------------------");

function getXpath(name){
    return "//input[id='"+name+"]";
}


console.log("--------------------------------");

console.log(getXpath("Akshay"));

function getXpath1(name){
    return `//input[@id='${name}']`;
}

console.log(getXpath1(`Naveen's`));