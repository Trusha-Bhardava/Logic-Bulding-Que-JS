
const job = [
    {
         title: "Frontend Developer",
        location: "Rajkot",
        salary: 30000
    },
    {
        title: "Backend Developer",
        location: "Ahmedabad",
        salary: 50000
    },
    {
        title: "React Developer",
        location: "Rajkot",
        salary: 40000
    }
];

// Rajkot job highest salaary

const result = job.filter((jobs) => {
    return jobs.location === "Rajkot";
})

.sort((a,b) => {
    return b.salary - a.salary; 
})

console.log(result);