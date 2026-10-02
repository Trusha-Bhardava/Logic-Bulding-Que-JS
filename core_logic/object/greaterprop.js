const marks = {
    math: 45,
    english: 72,
    science: 91
};

for (let mark in marks)
{
    if (marks[mark] > 50 )
    {
        console.log(mark, ":", marks[mark]);
    }
}