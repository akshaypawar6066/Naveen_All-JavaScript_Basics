
//1.Function declaration
function add(a,b)
{
    return a+b;
}
let sum=add(5,6);
console.log("Sum is:"+sum);

//2.Function expression()  (Anynomous function)
 const multiply= function(x,y) {
    return x*y;
  }
const mul=multiply(5,6);
console.log("Multiplication is:"+mul)

//3.Arrow function expression
const divide=(a,b)=>
{
  return a/b;
}
const div=divide(10,2);
console.log("Division is:"+div);

//4.Function Constrcutor
const  substarct=new Function('a', 'b', 'return a-b');
const sub=substarct(20,5);
console.log("substarct is:"+sub);


//5 IIFE()-->Immediately invovke Function expression--->Immediately call itself. Dont need to call it.
(function () {
    var privateVariable = "This is private Variable";
  
    function privateFunction() {
        console.log("This is a private function");
    }
  
    console.log(privateVariable); // Outputs: "This is private"
    privateFunction(); // Outputs: "This is a private function"
  })();

  

