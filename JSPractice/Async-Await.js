const getNo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {                        //Async Task
            const randomNo = Math.random();
            if (randomNo > 0.5) {
                resolve(randomNo);
            }
            else {
                const error = new Error("No is less than 0.5");
                reject(error);
            }
        },2500)
    })
}

console.log("Started...!!!");

async function getNoInfo()
{
    try{
        const result= await getNo();   //Async Step
        console.log("result is:"+result);
    }
    catch(error)
    {
 console.log("Something Went Wrong: " + error);
    }

}

getNoInfo();


