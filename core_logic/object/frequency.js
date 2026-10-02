const user = [
    {name: "amit", role: "recruiter"},
    { name: "Rahul", role: "recruiter" },
    { name: "Priya", role: "student" },
    { name: "Neha", role: "recruiter" }
];

let studentcount = 0;
let recruitercount = 0;

for (let i=0; i<user.length; i++)
{
    if(user[i].role === "recruiter")
    {
        recruitercount++;
    }

    if(user[i].role === "student")
    {
        studentcount++;
    }
}

console.log("Students:", studentcount);
console.log("Recruiters:", recruitercount);