const users = [
    { name: "Amit", age: 17 },
    { name: "Rahul", age: 22 },
    { name: "Priya", age: 20 }
];

const agefil = users.filter((user) => {
    return user.age >= 18 ;
})

console.log(agefil);