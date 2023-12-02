const promise1=new Promise((resolve, reject) => {
  setTimeout(()=>
  {
    resolve("Promise resolved...!!!")
  },200);

});

const promise2=new Promise((resolve, reject) => {
    setTimeout(()=>
    {
      reject("Promise rejected...!!!")
    },500);
  });

  //use Promise.race() to see which promise settles first.
  Promise.race([promise1, promise2])
  .then((result)=>
  {
    console.log("Result is:"+result)
  })
  .catch((error)=>
  {
    console.log("Error is:"+error);
  });