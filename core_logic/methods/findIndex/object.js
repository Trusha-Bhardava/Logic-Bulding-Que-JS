const users = [
    { id: 101, name: "Amit" },
    { id: 102, name: "Rahul" }
];

const result = users.findIndex((user) => {
    return user.id === 102;
})

console.log(result);