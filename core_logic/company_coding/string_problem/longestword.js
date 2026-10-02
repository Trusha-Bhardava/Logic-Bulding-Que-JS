const sentence = "i am good person ";

const words = sentence.split(" ");

let longestword = " ";

for(let i=0; i<words.length; i++)
{
    if (words[i].length > longestword.length)
    {
        longestword = words[i];
    }
}
console.log("Longest Word:", longestword);