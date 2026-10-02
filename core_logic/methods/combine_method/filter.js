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
    
// show rajkot job with above 35000 

const result = job.filter((jobs) => {
    return jobs.location === "Rajkot";
})

.filter ((jobs) => {
    return jobs.salary > 35000;
})

console.log(result);