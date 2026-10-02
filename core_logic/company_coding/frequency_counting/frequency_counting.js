const str = "javascrippt";

const frequency = {};

for(let i=0; i<str.length;i++)
{
    // str[0] = "j" ,  char = "j"
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

console.log(frequency);