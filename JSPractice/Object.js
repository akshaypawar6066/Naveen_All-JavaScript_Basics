// const user = {
//     "name": "Akshay",
//     "Age": 25,
//     "Email": "akshay@gmail.com"
// }

// user.mobNo = "6546465655";
// console.log(user);

// delete user.mobNo;
// console.log(user);


// user["Sallery"] = "9895665565";
// console.log(user);
// console.log(user["Age"]);


//Using Object Literals

// const user = {
//     "name": "Akshay",
//     "Age": 25,
//     "Email": "akshay@gmail.com"
// }

// for (const key in user) {
//     console.log(key + ":" + user[key]);
// }


//Using Constrctour Function


function car(name, model, price)
{
    this.name = name;
    this.model=model;
    this.price=price;
}

const car1=new car("Odi", "Q7", "81L");

console.log(car1)
