let myArray=[];  //Empty array;
let numbers=[1,5,98,65,98,,10.5]; //No Array
  //String Array

let language=["English", "Java", "JavaScript"];
console.log(language)
//Differents methods of Array in JS
//1.push()  --->To add oner or more elements to the end of an existing array and return new length array.

language.push("C#","Rubby");
console.log(language)
console.log("--------------------------------------------------------")


//2.pop() --->Removes the last elemnt from the array and returns that element.
let lastElement=language.pop();
console.log("last element is:"+lastElement);
console.log(language)
console.log("--------------------------------------------------------")



//3.shift() --.It will remove first element of the array and returns it.
let firstElement=language.shift();
console.log("First element is:"+firstElement);


console.log("--------------------------------------------------------")
console.log(language)


//4.unshift()  --->To add one or more elements to the beginning of an existing array and return new length array.
console.log("--------------------------------------------------------")

language.unshift("Python")
console.log(language)
//5.length---> To check length of the array.
console.log("Length of array is:"+language.length);

 //6.splice---->  To add or remove elements from the arrary from the perticular index.
console.log("--------------------------------------------------------")
language.splice(1,1, "Rubby");  //(at 1 index, remove element and add new element as "Rubby").
console.log(language)

language.splice(2, 0, "C-Language");
console.log("--------------------------------------------------------")
console.log(language);

language.splice(3, 2);
console.log("--------------------------------------------------------")
console.log(language);

language.splice(3, 0, "Akshay", true, 20);
console.log("--------------------------------------------------------")
console.log(language);

//7..slice();
 //It will return the copy the array starting from the provided index and not include the last index.

 let newArray=language.slice(1,4);

 console.log("--------------------------------------------------------")
console.log(newArray);

 //8. concat(0---->Combile two or more arrays and create new array.)
 let fruits=["Apple", "Banana", "Orane"];
 let num=[1,5,98,78,98.5];
 let mixedArry=fruits.concat(num);

 console.log("--------------------------------------------------------")
 console.log(mixedArry);

 //9. Return the first index at which given elemnt is found in th array
 //returns -1 if the element is not found.

 let colour=['Red', 'Green', 'Yellow', "Blue", 'Red','Magenta'];
let index=colour.indexOf("Red");
console.log("Index of Red is:"+index)

//second index of red?
let secondRedIndex=colour.indexOf("Red", 2)  //--->Searching will be start from the second (2) index.
console.log("Second Index of red  is:"+secondRedIndex)


//10. lastIndexOf()---> Return the index of the element occured at last.

let lastIndexSearch=colour.lastIndexOf("Blue");
console.log("Last Index of red  is:"+lastIndexSearch)

//11. include()---->It will check wheather speific element is included in array or not.
let test=['Admin','user', 'seller'];

const flag=test.includes("user","seller","Akshay");

console.log(flag);

//12 forEach()---->To Iterate elements of array.

let n=[12,46,464,646,976,646,58,6556];
n.forEach((e)=>{
    console.log(e);
})


















 

