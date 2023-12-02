
//1. map()  -->Calls a defined callbak fuction on each of the array element and return the result in the new array.
/*
let numbers=[1,2,3];
let doubleNumbers=numbers.map((e)=>
{
   return e*2;
});
console.log(doubleNumbers)


//F->C
//(F-32)*(5/9)

let fahTemp=[32,68,86,104,212];
/*
function farToCelsicus(farTemp)
{
   return (farTemp-32)*(5/9)
}

let celTemp=fahTemp.map(farToCelsicus);


let celTemp=fahTemp.map((e)=>
{
   return ((e-32)* (5/9));
})
console.log(celTemp);

*/

//2.filter()----->
// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let evenNumbers=numbers.filter((e)=>
// {
//    return e=e%2==0;
// })

// console.log(evenNumbers);
/*
let emplpyee=[
   {name:"Akshay", age:25, gender:"Male"},
   {name:"Amol", age:26, gender:"Male"},
   {name:"Divya", age:27, gender:"Female"},
   {name:"Priya", age:28, gender:"Female"}
]
let filteredArray=emplpyee.filter((emp)=>
{
  return emp.gender==="Female" && emp.age>26;
})

console.log(filteredArray)
*/

//3. reduce()--->
// let num=[1,2,3,4,5];  
// let acuumltedResult=num.reduce((accum, number)=>
// {
//    return accum+number;
// },0)

// console.log(acuumltedResult)

//let arr=[10,35,45,98,100,125,65,32];
/*
 let maxNumber=arr.reduce((max, num)=>
 {
   if(num>max)
   {
     return  max=num;
   }
   else{
      return max;
   }
 },0)

 console.log("Maximun no is:"+maxNumber)
 */

 /*
let minValue =Number.MAX_VALUE;

for(const e of arr)
{
   if(e<minValue) 
   {
      minValue=e;
   }
}

console.log("Min value from Array is:"+minValue);
*/

let arr=[9,36,45,99,100,125,65,32];
//1.every()--->Determines whether all the members of an array satisfy the specified condn or not.
// let flag=arr.every((e)=>
// {
//   return  e>=10;
// })
// console.log(flag)

//2.some()--->Determines whether any of the members of an array satisfy the specified condition or not.
// let flag=arr.some((e)=>
// {
//    return e%20==0;
// })

// console.log("Output of the some() method is:"+flag)

//3.find()---> Return the first element from the array which satisfied the given condition

// let result=arr.find((e)=>
// {
//    return e%2==0
// })

// console.log("First matching element is:"+result)

//4.reverse()---> To Reverse the elements of the array.
//let reverseArray=arr.reverse();
//console.log("Reversed Array is:"+arr.reverse());

//5.sort()---> Sort the elements

let products=["samsung", "imac", "macbook", "Nokia", "123Test"];
let sortedArray=products.sort();
console.log(sortedArray)

let numbers=[1,5,6,7,82];
numbers.sort((a,b)=>
{
   return b-a;;
})

console.log(numbers)
