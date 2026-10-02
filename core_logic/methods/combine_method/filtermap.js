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

// we want only title of Rajkot job

const result = job.filter((jobs) => {
    return jobs.location === "Rajkot";
})

.map((jobs) => {
    return jobs.title;
})

console.log(result);