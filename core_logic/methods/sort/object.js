const jobs = [
    { title: "Frontend", salary: 30000 },
    { title: "Backend", salary: 50000 },
    { title: "React", salary: 40000 }
];

jobs.sort((a,b) => {
    return b.salary - a.salary;
})

console.log(jobs);