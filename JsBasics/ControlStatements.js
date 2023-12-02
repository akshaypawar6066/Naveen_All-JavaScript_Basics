//Simple if-else
/*
function checkAge(age){
    if(age>=18)
    {
     console.log("You are old enough to vote");
    }
    else
    {
        console.log("Sorry, you are not allowed to vote");

    } 
}

checkAge(-10);
*/
//Nested If else
/*
 const checkNumber= (number) =>
 {
    if(number>0)
    {
        console.log("Number is positive")
    }
    else if(number <0)
    {
        console.log("Number is negative")
    }
    else{
        console.log("Number is Zero")
    }
 }
  checkNumber(0);
*/
/*
 //Nested if else
 function checkGrade(score)
 {
    let grade;
    if(score>=90)
    {
        grade='A';
    }
    else{
        if(score>=80)
        {
            grade='B';
        }
        else{
            if(score>=70)
            {
                grade='C';
            }
            else
            {
                if(score>=60)
                {
                    grade="D";
                }
                else{
                    if(score>=50)
                    {
                        grade="E";
                    }
                    else{
                        grade="F";
                    }
                }
            }
        }
    }
    console.log("Your Grade Is:"+grade)
 }

 checkGrade(88);
*/


 //Ladder if
  /*
 const checkLargsetNo= function (a, b, c) {
    if(a>b && a>c)
    {
        console.log("Largest no is a:"+a);
    }
    else{
        if(b>c)
        {
            console.log("Largest no is b:"+b)
        }
        else{
            console.log("Largest no is c:"+c)
        }
    }
 }

 checkLargsetNo(100,200,300);

*/
/*
let browser="Firefox";
  if(browser=="Chrome")
  {
    console.log("Launching chrome Browser");

  }
  if(browser=="Firefox")
  {
    console.log("Launching Firefox Browser");
  }
  if(browser=="Safari")
  {
    console.log("Launching Safari Browser")
  }
  else
  {
    console.log("Browser not supported");   //This is problem with If--->IF condition is satisfied at starting, why to cgheck all remaining conditions.
  }

*/
//We can do it with if else-if or Switch Case.
/*
let browser="Safari";
if(browser=="Chrome")
{
    console.log("Launching chrome Browser");

}

else if(browser=="FireFox")
{
    console.log("Launching Firefox Browser");

}
else if(browser=="Safari")
{
    console.log("Launching Safari Browser")

}
else{
    console.log("Browser not supported");   
}
*/
//Here if last condition is satisfied then why we are not checking directly to last if-else? This is not possible with if-else
//So we can do thsi with Swich Cases statements.
