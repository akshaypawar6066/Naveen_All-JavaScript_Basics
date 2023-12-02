// /*
// console.log("Hello");
// setTimeout(()=>
// {
//     console.log("My Name is Akshay:");
// },2000);

// console.log("My Name will be tell by Async Activity:")
// */


// let promise= new Promise((resolve, reject)=>
// {
// setTimeout(()=>
// {
//     let number=Math.random();
//     if(number>0.5)
//     {
//         resolve(number);

//     }
//     else{
//         let error = new Error("No is less than 0.5");
//         error.number=number;
//        reject(error);
//     }
// },5000);
// })

// console.log("Started...!!!");

// promise.then((result)=>
// {
//    console.log("Promise is fulfilled with No", result);
// })
// .catch((error)=>
// {
//     console.log("Promise is rejected with the below error", error)
//     console.log("Generated no is:"+error.number)
// })


let promise=new Promise(function(resolve,reject)
{
  setTimeout(()=>
  {
    resolve(42);
  },2000)
});

promise.then((result)=>
{
    console.log("Promise is fulfilled with No", result);
});

console.log('Started...')


const test=()=>
{
  setTimeout(()=>
  {
    console.log("Value is:"+80) 
  },5000);
};

test()