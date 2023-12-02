function f1()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>
        {
         reject("From Promise1")
        },100)
    })
}

function f2()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>
        {
         resolve("From Promise2")
        },400)
    })
}

function f3()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>
        {
         resolve("From Promise3")
        },200)
    })
}

Promise.any([f1(), f2(), f3()])
.then((result)=>
{
    console.log("First Resolved Promise is:"+result)
})
.catch((err)=>
{
    console.log("Combined Result of all the rejected Promises are:"+err)
;})

