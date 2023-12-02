//Swich case statememts
/*
function checkDayOfTheWeek(dayNumber)
{
    let day;
    switch(dayNumber) {
        case 0:
            day="Monday";
            break;
            
        case 1:
            day="Tuesday";
            break;
            
        case 2:
            day="Wednesday";
            break;

         case 3:
            day="Thursday";
            break;
                
        case 4: 
        
            day="Friday";
            break;
            
        case 5:
           day="Saturday";
            break;

            case 6:
                day="Sunday";
                break;
                default:
                    console.log("Please provide valid input:")
    }

   return day;
}

console.log(heckDayOfTheWeek(5));
*/

//Example 2
//Launch Browser
function launchBrowser(browserName) {

    switch (browserName) {
        case "Chrome":
            console.log("Launching chrome Browser");
            break;

        case "FireFox":
            console.log("Launching Firefox Browser"); break;
            break;

        case "Opera":
            console.log("Launching Opera Browser");
            break;

        default:
            console.log('Invalid Browser:')
    }


}

console.log(launchBrowser("Chrome"))
