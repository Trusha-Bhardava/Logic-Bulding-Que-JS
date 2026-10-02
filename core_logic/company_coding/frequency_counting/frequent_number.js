const arr = [1,2,4,5,2,4,2];

const frequency = {};
let maxcount = 0;
let mostfrequent = arr[0];

for(i=0; i<arr.length; i++)
{
    const number = arr[i];

    if(frequency[number])
    {
       frequency[number]++;
    }
    else
    {
        frequency[number] = 1;
    }

    if(frequency[number] > maxcount)
    {
       maxcount = frequency[number];
       mostfrequent = number;
    }
}

console.log(mostfrequent);