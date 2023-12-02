let promise = new Promise((resolve, reject)=>
{
    console.log("Promise is pending...!!!")
    setTimeout(()=>
    {
     console.log("I am a promise and I am fulfilled.")
     resolve(true);
    },5000)
})

promise.then((result)=>
{
    console.log("Promise is fulfilled with value:", result)
}) 

let promise1 = new Promise((resolve, reject)=>
{
    console.log("Promise is pending...!!!")
    setTimeout(()=>
    {
     console.log("I am a promise and I am rejected.")
     reject(false);
    },2000)
})

promise1.catch((err)=>
{
    console.log("Promise is rejected with value:", err)
})