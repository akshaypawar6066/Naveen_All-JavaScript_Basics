class MathUtility {
    b=20;
    static a=30;

    multiply(a,b)
    {
        return a*b;
    }

    static add(a,b)
    {
        return a+b;
    }
}
const sum=MathUtility.add(10,20);

const Math=new MathUtility();
const mul=Math.multiply(10,20);

console.log(sum);
console.log(mul);

console.log(MathUtility.a);
console.log(Math.b);




//     constructor(a, b) {
//         this.a = a;
//         this.b = b;

//     }
//     multiply() {
//         return this.a * this.b;
//     }

//     static add(a,b)
//     {
//        return a+b;
//     }

// }

// const math = new MathUtility(10, 5);
// console.log(math.multiply());
// console.log(MathUtility.add(math.a, math.b));


