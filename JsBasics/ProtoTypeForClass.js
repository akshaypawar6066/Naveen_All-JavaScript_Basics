class Employee {

    constructor(eid, ename) {
        this.id = eid;
        this.name = ename;
    }
}

Employee.prototype.add = function (a, b) {      //Adding function to the class using proto Type.
    return a + b;
}


Employee.prototype.sallery = 50000;

const emp1 = new Employee(101, "Akshay");
console.log(`Employe name is: ${emp1.name}  Employe Id Is:${emp1.id}  and Employe Sallery is:${emp1.sallery}, Addition of two numbers are:${emp1.add(100, 200)}`);

const emp2 = new Employee(102, "Amol");
console.log(`Employe name is: ${emp2.name}  Employe Id Is:${emp2.id}  and Employe Sallery is:${emp2.sallery} Addition of two numbers are:${emp2.add(1000, 2000)}`);

