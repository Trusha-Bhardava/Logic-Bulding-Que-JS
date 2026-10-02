const users = [
    { id: 101, name: "Amit" },
    { id: 102, name: "Rahul" },
    { id: 103, name: "Priya" }
];

const result = users.find((user) => {
    return user.id === 102;
})

console.log(result);