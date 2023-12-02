// let numbers = [46,52,47,98,100,256];

// console.log(numbers);

// console.log(`Array length is:`+numbers.length);

// numbers[6]="abc@gmail.com";
// numbers[7]="Mumbai";
// console.log(numbers);
// console.log(`Array length is:`+numbers.length);
// console.log("------------------------------------------------------------------");

// numbers.push(123, 48);
// console.log(numbers);

// numbers.pop();
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

// numbers.unshift(98,"Boss");
// console.log(numbers);
// console.log(numbers.length);
// console.log("------------------------------------------------------------------");


// numbers.splice(2, 0, "Akshay", "Pawar")
// console.log(numbers)
// console.log(numbers.length);

// console.log("------------------------------------------------------------------");
// numbers.splice(3, 1);
// console.log(numbers)
// console.log(numbers.length);


// console.log(numbers.indexOf("Bosss"));

// console.log(numbers.includes("Akshay"))


// numbers.forEach((e)=>
// {
//     console.log(e)
// })

let numbers=[1,2,3,4,5];

const dounleNo=numbers.map((n)=>
{
  return n*2;
})

console.log(dounleNo)


const evenNo=numbers.filter((e)=>
{
    return e%2==0;
})
console.log(evenNo);


const accumArray=numbers.reduce((accum,number)=>
{
  return accum+number;
},0)

console.log(accumArray);

const ascArray=numbers.sort((a,b)=>
{
    return a-b;
})
console.log(ascArray);

const desArray=numbers.sort((a,b)=>
{
    return b-a;
})
console.log(desArray);

console.log(numbers)

console.log(desArray)

const revArray=numbers.reverse();

console.log(revArray);
console.log(numbers)










