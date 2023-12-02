function getNo()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNo = Math.floor(Math.random() * 10) + 1;
            if (randomNo % 2 === 0) {
                resolve(randomNo);
            }
            else {
                const error=new Error("Generated No is not even:")
                error.number = randomNo;
                reject(error);
            }
        }, 2000)
    })
}

getNo().then((result) => {
    console.log("Genearted Even No is:" + result)
})
    .catch((err) => {
        console.log("Generated No is not even:" + err)
        console.log("Genaerated Odd No is:"+err.number)
        console.log("Message is:"+err.message)
    })