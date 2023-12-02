function f1()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>
        {
         resolve("From Promise1")
        },100)
    })
}

function f2()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>
        {
         reject("From Promise2")
        },400)
    })
}


Promise.race([f1(), f2()])
.then((result)=>
{
    console.log("value is:"+result);
})
.catch((error)=>
{
   console.log("Error is:"+error);
})