const arr = [1,2,3,5,3,2,5,6,9];

const dublicate = [];
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

    if(frequency[number] > 1)
    {
        dublicate.push(number);
    }

}

console.log(dublicate);