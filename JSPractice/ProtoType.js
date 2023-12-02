class Employee {
    constructor(name, id)
    {
        this.name = name;
        this.id = id;
    }
    
}
Employee.prototype.sallery=50000;
Employee.prototype.add= function(a,b)
{
    return a+b;
}

const emp1=new Employee("Akshay", "101");

// emp1.sallery=50000;

console.log(`Employe name is : ${emp1.name} and employye id is: ${emp1.id} and employee sallery is: ${emp1.sallery} and addition of two no are: ${emp1.add(150,250)}`);

const emp2=new Employee("Amol", "102");
console.log(`Employe name is : ${emp2.name} and employye id is: ${emp2.id} and employee sallery is: ${emp2.sallery} and addition of two no are: ${emp2.add(100,100)}`);

