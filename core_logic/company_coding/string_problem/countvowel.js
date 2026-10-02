const str = "hEllo world";

const vowels =  ['a', 'e', 'i', 'o', 'u'];

let vowelCount = 0;
let constantCount = 0;

for (let i=0; i<str.length; i++)
{
    const  char = str[i].toLocaleLowerCase();

    if(vowels.includes(char))
    {
        vowelCount++;
    }
    else
    {
        constantCount++;
    }
}
console.log("Vowel Count:", vowelCount);
console.log("Constant Count:", constantCount);