//Plymorphism----->One Object having different forms.(Method Overidding is the example).
//Method Overidinf is possible only with Inherientance Concept.
class Shape {
    draw()
    {
        return "I am Generic Shape";
    }
}

class Square extends Shape{
    draw()
    {
        return " I am a Square:"    //Implementation chaged
    }

}

class Circle extends Shape {
    draw()
    {
        return " I am a Circle:"  //Implementation chaged
    }
}

const shape=new  Shape();
const square=new Square();
const circle=new Circle();

console.log(shape.draw());
console.log(square.draw());
console.log(circle.draw());

