//1....>Case 1 --->
// f1()--->Resolve
// f2()--->Resolve
// f3()--->Resolve

const function1=()=>
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
            resolve("Data from function1")
        },2000)
    });
}

const function2=()=>
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
            resolve("Data from function2")
        },2000)
    });
}

const function3=()=>
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
            //resolve("Data from function3")
            const data=[1,2,5,6,];
            resolve(data);
        },5000)
    });
}

Promise.all([function1(), function2(), function3()])
.then((dataArrray)=>
{
  console.log("All data from differnet function is:", dataArrray)
})
.catch((error)=>
{
    console.log("Error in promise", error)
})


//2....>Case 2 --->
//f1()--->resolve
//f2()---> reject()
/*

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from getData")
        }, 2000)
    });
}

const getError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Error: Data is not avilable from getData"))
        }, 2000)
    });
}



Promise.all([getData(), getError()])
.then((dataArray)=>
{
    console.log("All Data Fetched is:"+dataArray);

})
.catch((error)=>
{
    console.log("All fetched error is "+error)
})
*/