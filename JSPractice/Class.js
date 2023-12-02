class MathUtility
{

    a=25;
    static s="Akshay"

    constructor(num1, num2)
    {
        this.num1 = num1;
        this.num2 = num2;
    }

    testNonStatic()
    {
        console.log("Baisc Non Static Method:")
    }
    add()
    {
        return this.num1+ this.num2;
    }

     multiply(num1, num2)
    {
        return  this.num1* this.num2;
    }

    static substarct(num1 ,num2)
    {
        return num1-num2;
    }

    static divide(num1 ,num2)
    {
        return num1/num2;
    }

}

const maths=new MathUtility(50,10);

console.log("Addition of two no's are:"+maths.add());
console.log("Multiplication of two no's are:"+maths.multiply());
maths.testNonStatic();
console.log("Substarction of two no's are:"+MathUtility.substarct(20,10));
console.log("Division of two no's are:"+MathUtility.divide(20,10));


console.log(maths.a);
console.log(MathUtility.s);




