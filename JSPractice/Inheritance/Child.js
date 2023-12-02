import Animal from "./Parent.js";

class Goat extends Animal {
    constructor(name, color, food) 
    {
        super(name, color)
        this.food = food;
    }

    eatingFood()
    {
        console.log("Animal name is:"+this.name+"  and Animal is  eating following food:"+this.food);
    }
}

export default Goat;