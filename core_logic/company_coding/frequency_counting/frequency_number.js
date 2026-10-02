const arr = [1,2,3,2,5,6,3,2,5];

const frequency = {};

for(let i=0; i<arr.length;i++)
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
}

console.log(frequency);