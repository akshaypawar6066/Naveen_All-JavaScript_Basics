const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNo = Math.random();
        if (randomNo > 0.5) {
            resolve(randomNo);
        }
        else {
            const error = new Error(("No is less than 0.5"));
            error.number = randomNo;
            reject(error)
        }
    }, 2000)
});

myPromise.then((result) => {
    console.log("Generated No is:" + result)
})
    .catch((e) => {
        console.log("Error Occurred:" + e)
        console.log("Generated No is:"+e.number)
    })
