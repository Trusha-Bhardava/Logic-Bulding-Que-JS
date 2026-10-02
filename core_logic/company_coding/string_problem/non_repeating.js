const str = "aabbcdde";

const frequency = {};

// count chharacter frequency in sring
for (let i=0; i<str.length; i++)
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


  // find first char with frequency 1

  for(let i=0; i<str.length; i++)
  {
    const char = str[i];

    if(frequency[char] === 1)
    {
        console.log(char);
        break;
    }
  }

}