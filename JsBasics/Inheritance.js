//Parent class  (Super class)

class Vehicle {

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `${this.make},${this.model}, ${this.year}`;
    }

    startEngine() {
        console.log("Engine Started:"+this.model);
    }
    static stopEngine() {
        console.log("Engine Stopped:");
    }

}

//Child class (Sub class)

class Car extends Vehicle {
    constructor(make, model, year, fuelType) {
        super(make, model, year);   //Super keyword used to call the parent class constructor.
         this.fuelType = fuelType;
    }

    driveCar() {
        console.log("Driving Car:"+this.model);
    }
}

//Child class (Sub class)


class Truck extends Vehicle {
    constructor(make, model, year, loadingCapacity) {
        super(make, model, year);   //Super keyword used to call the parent class constructor.
         this.loadingCapacity = loadingCapacity;
    }

    driveTruck() {
        console.log("Driving Truck:"+this.model+" loading capacity is:"+this.loadingCapacity);
    }
}

//creting the objects/Instances.
const car=new Car("Honda", "CIVIC", 2023, "Petrol");

car.startEngine()
console.log(car.getInfo());
Car.stopEngine();
car.driveCar();

console.log("----------------------------------------------------------------");

const truck=new Truck("tata", "Sumo", 2020, 100);
console.log(truck.getInfo());
truck.startEngine();
truck.driveTruck();
Truck.stopEngine();














