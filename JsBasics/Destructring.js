//Array/Object--->Extract values from array/object and assign it to the different variables.

//Array   Destructuring
const numbers=[1,2,3,4];
const[a,b,c] = numbers;

console.log(a);
console.log(b);
console.log(c);
console.log("--------------------------------");

//Spread operator(...) in Destructuring

const nums=[10,20,30,40,50,60];
const[x,y,z, ... testNo]=nums;

console.log(x);
console.log(y);
console.log(z);
console.log(testNo);
console.log("--------------------------------");


//Object Destructuring

const user ={
    name:"Akshay",
    age:25,
    job:"Software Engineer"
}

const{name, age, job} = user;
console.log(name);
console.log(age);
console.log(job);







