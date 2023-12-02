const getMessage=()=>
{
    return new Promise((resolve, reject)=>
    {
      setTimeout(()=>
      {
        reject("Not able to get the message:")
      },100)
    })
}

const getUser=()=>
{
    return new Promise((resolve, reject)=>
    {
      setTimeout(()=>
      {
        reject("Able to get the User Details:")
      },200)
    })
}

const getProduct=()=>
{
    return new Promise((resolve, reject)=>
    {
      setTimeout(()=>
      {
        reject("able to get the product details:")
      },500)
    })
}


Promise.any([getMessage(), getUser(), getProduct()])
.then((result)=>
{
    console.log("First successful resolved promise value is:"+result);    //Log the first fulfilled promise with resolved.
})
.catch((err)=>
{
  console.log("All Rejected Promoses Are:"+err)    //When all the promises are gets rejected
})

