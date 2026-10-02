const str1 = "silent";
const str2 = "listen";

if(str1.length !== str2.length)
{
    console.log("anagram not");
}
else
{
  const frequency = {};

  for(let i=0; i<str1.length; i++)
  {
    const char = str1[i];

    if(frequency[char])
    {
        frequency[char]++;
    }
    else
    {
        frequency[char] = 1;
    }
  }

  for(let i=0; i<str2.length; i++)
  {
    const char = str2[i];

    if(!frequency[char])
    {
       console.log("not anagram");
       break;
    }

    frequency[char]--; // decrement frequency count for each char 
}
  
   let isAnagram = true;

   for(let char in frequency)
   {
    if(frequency[char] !== 0)
    {
        isAnagram = false;
        break;
    }
   }

   if(isAnagram)
   {
       console.log("anagram");
   }
   else
   {
    console.log("not anagram");
   }
}