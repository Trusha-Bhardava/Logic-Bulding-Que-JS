const users = [
    { name: "Rahul" },
    { name: "Amit" },
    { name: "Rahul" },
    { name: "Priya" }
];

const names = {};

for (let i = 0; i < users.length; i++)
{
    let name = users[i].name;

    if(names[name])
    {
        console.log("duplicate");
    }
    else
    {
        names[name] =1;      
    }
}
