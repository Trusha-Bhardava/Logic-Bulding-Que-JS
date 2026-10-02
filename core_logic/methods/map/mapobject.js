const users = [
    { name: "Amit", age: 20 },
    { name: "Rahul", age: 22 },
    { name: "Priya", age: 21 }
];

const names = users.map((user) => {

    return user.name;
   
})

console.log(names);
