const users = [
    { name: "Amit", role: "student" },
    { name: "Rahul", role: "recruiter" }
];

const checkexist = users.some((role) =>{
    return role.role === "recruiter";
})

console.log(checkexist);