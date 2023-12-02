//async function without a wait but with returning resolve() promise
/*
async function f1() {
    console.log("This is asynchronous function without a wait for resolve");
    return 42;    //It will return the resolve() promise.
}

f1().then((result)=>
{
    console.log("Value is", result)
})

//async function without a wait but with returning reject() promise

async function f2() {
    console.log("This is asynchronous function without a wait for reject");
     throw new Error("This is my Error");   //It will return the reject() promise.
}

f2()
.catch((err)=>
{
    console.log("Error is"+err)
})

*/

//asyns function with resolve/reject promise.

function getInfo() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        setTimeout(() => {
            if (randomNumber > 0.5) {
                resolve(randomNumber);
            }
            else {
                reject(new Error("Wrong value error:"))
            }
        }, 5000);
    })
}

//Create Async function which will call getInfo();
async function getNumberInfo() {
    try {
        const result = await getInfo();    //Async step
        console.log("Result is:" + result)
    }
    catch(error) {
        console.log(error);

    }
    console.log("This is staement after the async operation is done....:")


}
getNumberInfo();







