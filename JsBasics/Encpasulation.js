class Student {
    #name; 
    #marks;
    
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getMarks() {
        return this.marks;
    }

    setMarks(marks) {
        this.marks = marks;
    }

}

const stu = new Student();
stu.setName('Akshay');
stu.setMarks(`91000`);

console.log(stu.getName());
console.log(stu.getMarks());


