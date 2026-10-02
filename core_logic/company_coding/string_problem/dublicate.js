const str = "programming";

const frequency = {};
let dublicates = "";

for(let i=0; i<str.length; i++)
{
     const char = str[i];

    if(!frequency[char])
    {
        frequency[char] = true;
        dublicates = dublicates + char;
    }
}

console.log(dublicates);
