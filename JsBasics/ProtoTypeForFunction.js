function student(name, gender)
{
    this.name=name;
    this.gender=gender;
}

student.prototype.age=35;
const stu1=new student("Akshay", "male");
   //stu1.age=26;
   console.log(stu1.name+","+ stu1.gender+","+stu1.age);

const stu2=new student("Akshay", "male");
console.log(stu2.name+","+ stu2.gender+","+stu2.age);