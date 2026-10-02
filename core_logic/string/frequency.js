let str ="hello";

let frequency = {};

for ( let i=0; i<str.length; i++)
{
    let char = str[i];

    if(frequency[char])
    {
        frequency[char]++;
    }
    else
    {
        frequency[char] = 1;
    }
}

console.log(frequency);