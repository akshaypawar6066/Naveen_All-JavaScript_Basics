//1.Using Object Literal :{}
const user={
    name:"Akshay",
    age:20,
    city:"Bangalore"
}
console.log(user)

user.email="AKSHAY@123";
console.log(user)


console.log(user.name);
console.log(user["age"])

console.log("For in loop to iterate Object---->")

for(const key in user)
{
    console.log(key+":"+user[key]);
}

//2. Using Constrctor Function
function car(name, price, colour)
{
    this.name=name;
    this.price=price;
    this.colour=colour;
}

const c1=new car("Odi", 10, "red");
console.log("Name is:"+c1.name+" "+"Price is:"+c1.price+" "+"colour is:"+c1.colour);
