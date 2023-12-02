class Car
{
      static wheels=4;
      lisceneNo=1000;
      constructor(name, model, price)
      {
        this.name=name;
        this.model=model;
        this.price=price;
      }

      static stop()
      {
        console.log("car stopped:");
      }

      drive()
      {
        console.log(`Akshay is driving ${c1.name} car...!!!`);
      }
}

const c1=new Car("ODI", "Q7", "36L")
console.log("Printing all the non static properties below:");
console.log("Name of the car is: " + c1.name);
console.log("Model of the car is: " + c1.model);
console.log("Price of the car is: " + c1.price);
console.log("lisceneNo of the car is: " + c1.lisceneNo);
c1.drive();


console.log("----------------------------------------------------------------");
console.log("Printing all the static properties below:");
console.log("Car has wheel count of:"+Car.wheels);
Car.stop();




