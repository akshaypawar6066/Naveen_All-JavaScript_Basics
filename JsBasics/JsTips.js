
//To check if the particular value is present in the array or not.
const num=[15,45,45,45,46,46,2,25, "Akshay"]
 const get=()=>
 {
    if(num.includes("Akshay"))
{
    return true;
}
else{
    return false;
}
 }

 //To check if the  array is empty or not.
 function toCheckEmpty()
 {
    if(num.length===0)
    {
        console.log("Array is empty")
    }
    else{
        console.log("Array is not empty")


    }
 }

 console.log(get());
 toCheckEmpty();