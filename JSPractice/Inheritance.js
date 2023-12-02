class Car {
    static wheels=4;
    mirrors=2;
       constructor(name, model ,price) {
        this.name = name;
        this.model = model;
        this.price = price;
    }

    startEngine()
    {
        console.log('The car name is:'+this.name+" and its engine started.");
    }

    static stopEngine()
    {
     console.log(`Car name is 'ODI' and its engine stopped...!!!`)
    }


}

class Bike extends Car{
    constructor(name, model, price, fuelType)
    {
        super(name, model, price);
        this.fuelType=fuelType;
    }

    static stands=1;
    shorkAbsosorbers=1;


    injectingFuel()
    {
        console.log(`Injecting fuel in the ${this.name} Car`);
    }

    static exhaustingFuel()
    {
        console.log("Exhausted fuel from the car...");
    }
   
  
}

const object=new Bike("ODI", "Q7", "1CR", "Petrol");

object.startEngine();
Bike.stopEngine();
console.log("No of wheels in Car is:"+Bike.wheels);
console.log("No of wmirros in car is:"+object.mirrors);

object.injectingFuel();
Bike.exhaustingFuel();

console.log('No of stands are:'+Bike.stands);
console.log('No of ShokAbsorbers are:'+object.shorkAbsosorbers);









