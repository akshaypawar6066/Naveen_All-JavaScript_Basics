import fs from 'fs';
fs.readFile("Akshay.txt", "utf-8", (error, data) => {
    console.log(data);
});
console.log("Bye Akshay...");

