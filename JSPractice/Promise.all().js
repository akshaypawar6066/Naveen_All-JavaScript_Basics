function function1()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>
        {
            resolve("Data from Function1")
        },500)
    })
}


function function2()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>
        {
            reject("Data from Function2");
        },500)
    })
}

function function3()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>
        {
            const data=[1,2,5,6,];
            resolve(data);
        },500)
    })
}

Promise.all([function1(), function2(), function3()])
.then((result)=>
{
    console.log("Data from all the Promises are:", result)
})
.catch((error)=>
{
    console.log("All the errors are:"+error)
})