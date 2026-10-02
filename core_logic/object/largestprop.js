const marks = {
    math: 85,
    english: 72,
    science: 91,
    computer: 88
};

let highest = 0;

let highestsubject = "";

for (let subject in marks)
{
    if(marks[subject] > highest)
    {
        highest = marks[subject];   
        highestsubject = subject;
    }
}

console.log(highestsubject);
console.log(highest);
