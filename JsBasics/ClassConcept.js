class Car
{
   
     constructor(name,price, model,colour)
     {
        this.name=name;
        this.price=price;
        this.model=model;
        this.colour=colour;
     }
     refule()
     {
        console.log(this.name+" Car is refuled:")
     }
}

 //New keyword id uded to create the object
 const car1=new Car("ODI", "65L", "Q7", "Black");

console.log(car1.name);
console.log(car1.price);
car1.refule();

console.log("---------------------------")

const car2=new Car("BMW", "70L", "650D", "White");

console.log(car2.name);
console.log(car2.price);
car2.refule();


