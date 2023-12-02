class Animal {
    constructor(name, colour)
    {
        this.name = name;
        this.colour = colour;
    }

    animalInfo()
    {
        console.log(`Name of Animal is ${this.name} and color of animal is ${this.colour}`);
    }
}

export default Animal;