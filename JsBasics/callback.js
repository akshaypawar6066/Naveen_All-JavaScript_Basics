//callback function--->Callback Function is a function that can pass argument to the another function.
//Async call/task--->Once this task is completed --->then only callback function will be called.


//Basic callback function---(Without Asynchronous task.)

/*
function greet(name, callback)
{
    console.log(`Hello ${name}`)   //(Withou async task).
    callback();
}

function display()
{
    console.log("Hi");
}


greet("Akshay", display);

*/

//callback function---->With Async call//task.
function printInfo(name, callback) {
  console.log("Started");
  
    //Async function/task/step
    setTimeout(function () {
        console.log("Printing info for:" + name);
        callback("Call me back...!!!");
    }, 2000);
    console.log("Ended")

}

//callback
function displayMessage(msg) {
    console.log(msg);
}


printInfo("John", displayMessage)
/*

function fetchUserData(userId, callback)
{
   setTimeout(function()
   {
     const users={
        1:{id:1, name:"Akshay"},
        2:{id:2, name:"John"}
     };
     const user=users[userId];
     if(user)
     {
         callback(null, user)
     }
     else{
        callback("User Not found", null);
     }
   },0)
}

//callback function
function handleUserData(error,user)
{
  if(error)
  {
    console.error("Error:"+error)
  }
  else{
      console.log("User:",user)
  }
}

fetchUserData(3, handleUserData);
*/






