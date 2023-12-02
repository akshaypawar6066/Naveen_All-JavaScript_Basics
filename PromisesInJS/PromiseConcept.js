const randomNoPromise = new Promise((resolve, reject) => {
    //Async Operation
    setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve(randomValue)
        }
        else {
            const error=new Error('Value is too small');
            error.number=randomValue;
            reject(error);
        }

    }, 3000)   //delay of the 3 sec.   
});

console.log("Started...");

randomNoPromise.then((result) => {           //Handler
    console.log("Promise is fulfilled with value:",result);
})
    .catch((error) => {                       //Handler
        console.error("Promise is rejected with error:",error);
        console.log("Generated number:", error.number); // Add this line to display the generated number
    })



