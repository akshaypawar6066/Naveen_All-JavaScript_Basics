class Employee{
    constructor(id, name, sallery, location)
    {
        this.id=id;
        this.name=name;
        this.sallery=sallery;
        this.location=location;
    }

    registartion()
    {
        console.log(this.name+":Employe needs to be register here:")
    }
}


const e1=new Employee(101,'Akshay', "69000", "Mumbai");
console.log(e1.id);
console.log(e1.name);
console.log(e1.salery);
console.log(e1.location);

//calling function
e1.registartion();


console.log("--------------------------------");

const e2=new Employee("102", "Amol", "100000", "Pune");

console.log(e2.id);
console.log(e2.name);
console.log(e2.sallery);
console.log(e2.location);

e2.registartion();