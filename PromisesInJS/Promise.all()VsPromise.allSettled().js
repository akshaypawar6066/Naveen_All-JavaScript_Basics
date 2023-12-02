//Use Case
//f1()--->resolve
//f2()---> reject()

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
            reject(new Error("Error: Data is not avilable from getError"))
        }, 2000)
    });
}

Promise.allSettled([
    getData(),
    getError()
])
.then((results)=>
{
    for(const result of results) {
        if(result.status ==='fulfilled')
        {
            console.log("Value is:"+result.value);
        }
        else{
            console.log("Reason for the rejection is:"+result.reason);
        }
    }
})
