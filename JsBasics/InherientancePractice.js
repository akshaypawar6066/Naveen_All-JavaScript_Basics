class Animal {
    constructor(name, color, legs)
    {
        this.name = name;
        this.color = color;
        this.legs = legs;
    }

    run()
    {
        console.log(this.name+" is running")
    }

    shout()
    {
        console.log(this.name+" is shouting");
    }
}

class Monkey extends Animal
{
    constructor(name, color, legs, foodType)
    {
        super(name, color, legs);
        this.foodType=foodType;
    }

    eatingFoodType()
    {
        console.log(this.name+" is eating "+this.foodType);
    }
}

let monkey=new Monkey("Bruno", "Black", 4, "Biscuits");
monkey.run();
monkey.shout();
monkey.eatingFoodType();