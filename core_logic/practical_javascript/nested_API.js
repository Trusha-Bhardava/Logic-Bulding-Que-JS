const data = {
  company: {
    name: "ABC Technologies",

    jobs: [
      {
        title: "MERN Developer",
        location: "Rajkot"
      },
      {
        title: "React Developer",
        location: "Ahmedabad"
      }
    ]
  }
};

// access company name
console.log(data.company.name);

// access job title
console.log(data.company.jobs[0].title);

// in react
{data.company.jobs.map((job) => (
    <div key={job.title}>
        <h2> {job.title} </h2>
        <p>Location: {job.location}</p>
    </div>
))}
