const marks = {
    math: 85,
    english: 72,
    science: 91
};

let total = 0;

for (let mark in marks)
{
    total = total + marks[mark];
}

console.log(total);