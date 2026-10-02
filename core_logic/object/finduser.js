const users = [
    { name: "Amit", age: 17 },
    { name: "Rahul", age: 21 },
    { name: "Priya", age: 19 }
];

let target = "Priya";

for (let i=0; i<users.length; i++)
{
    if(users[i].name === target)
    {
        console.log(users[i]);
        break;
    }
}