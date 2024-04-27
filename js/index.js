const prompt = require('prompt-sync')();


// trim methods
// let msg = "    helloWorld    ";
// console.log(msg.trim());
// trim method is use to remove the spaces from the variable and normally used in password
// example
let  Name =  prompt("Enter your Name");
console.log(`hey {Name}  how is your day`);
let newName = Name.trim();
let aname = `hey {newName}  how is your day`
console.log(aname);


