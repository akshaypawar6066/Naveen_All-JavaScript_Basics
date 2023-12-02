// const a=12345;
// console.log(a);
// console.log(typeof a)
// const noString=a.toString();
// console.log(noString);
// console.log(typeof noString);
// let revNo="";
// for(let i=noString.length-1; i>=0; i--)
// {
//    revNo=revNo+noString.charAt(i);
// }

// console.log(revNo);
//console.log(32 / 10);   In Java It will return 3 but in JS it is retrning 3.2

//123=321
let rem;
let revNo = 0;
const reverseNo = (num) => {
    if (num >= 0 && num <= 9) {
        return num;
    }
    else {

        while (num > 0) {
            rem = num % 10;
            revNo = revNo * 10 + rem;
            num = Math.floor(num / 10);
        }

    }
    return revNo;
}



console.log("Reverse no is:" + reverseNo(27));