const jobs = [
    { title: "Frontend Developer", location: "Rajkot" },
    { title: "Backend Developer", location: "Ahmedabad" },
    { title: "React Developer", location: "Rajkot" }
];

const job = jobs.filter((job) => {
    return job.location === "Rajkot";
})

console.log(job);