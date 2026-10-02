
const users = [
    { name: "Amit", age: 21 },
    { name: "Rahul", age: 21 },
    { name: "Priya", age: 19 }
];

let oldest = users[0];

for (let i = 1; i < users.length; i++)
{
    if (users[i].age > oldest.age)
    {
        oldest = users[i];
    }
}

console.log(oldest);