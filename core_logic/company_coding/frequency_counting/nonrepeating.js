const str = "aabbdccs";

const frequency = {};

for(let i=0; i<str.length; i++)
{
    const char = str[i];

    if(frequency[char])
    {
        frequency[char]++;
    }
    else
    {
        frequency[char] = 1;
    }
}

for(let i=0; i<str.length; i++)
{
     const char = str[i];

    if(frequency[char] === 1)
    {
        console.log(char);
        break;
    }
} 