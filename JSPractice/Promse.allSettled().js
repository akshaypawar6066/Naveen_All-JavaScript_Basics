function getData()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>
        {
           const data=[4,46,6,6,6565,98856];
           resolve(data);
        },1000)
    })
}

function getError()
{
    return new Promise((resolve, reject) =>
    {
        reject("data is not available from getError() Function")
    },1000)
}

Promise.allSettled([getData(), getError()])
.then((results)=>
{
    for(const result of results)
    {
        if(result.status==="fulfilled")
        {
            console.log('Value is:',result.value)
        }
        else{
            console.log("Reson for the rejection is:",result.reason)
        }
    }
})