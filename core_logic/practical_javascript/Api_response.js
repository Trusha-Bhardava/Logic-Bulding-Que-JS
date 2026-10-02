const jobs =[
    {
        id : 101,
        title : "MERN Stack developer",
        salary: 60000,
        location : "banglore",
        jobType : "Full Time"
    },
    {
        id: "102",
        title: "Frontend Developer",
        salary: 80000,
        location: "Ahmedabad",
        jobType: "Full Time"
    },
    {
        id: "103",
        title: "Backend Developer",
        salary: 70000,
        location: "Rajkot",
        jobType: "Remote"
    }
];

// job titles
const titles = jobs.map((job) => job.title);
console.log(titles);


const salaries = jobs.find((job) =>
{
    return job.salary > 60000 && job.location === "Rajkot";
}
);
console.log(salaries);

// sort job by salary

const sortjob = jobs.sort((a,b) => {
    return a.salary - b.salary;
});
console.log(sortjob);