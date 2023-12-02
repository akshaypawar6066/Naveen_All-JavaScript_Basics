function getEvenNo(value, delayTime)
{
   return new Promise((resolve, reject)=>
   {
    setTimeout(()=>
    {
        if(value%2===0)
        {
            resolve(value);
        }
        else{
            const error=new Error("Value is not even number:");
            error.value=value;
            reject(error);
        }
    }, delayTime)
   })
}

//Promie chain


getEvenNo(4, 1000)
 .then(result=>
    {
        console.log("Step 1: Getting the result:", result);
        return getEvenNo(6,1000) 
    })
    .then(result=>
        {
            console.log("Step 2: Getting the result:", result);
        })
        .catch(error=>
            {
                console.log("Promise has error:", error);
                console.log("Value is:"+error.value)
            }); 
