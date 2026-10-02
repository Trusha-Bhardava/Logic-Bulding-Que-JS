let jobs = [
  { id: 1, title: "React Developer" },
  { id: 2, title: "Node Developer" }
];

// add job
jobs.push ({ id:3, title: "full stack"});
console.log(jobs);

// update job
const updatejob = jobs.map((job) => {
    if(job.id ===2)
    {
        job.title = "Full Stack Developer";
        console.log("updated job", job);
    }
    return job;
});

// delete job
const deletejob = jobs.filter((job) => {
    return job.id !== 1;
});
console.log("deleted job", deletejob);
