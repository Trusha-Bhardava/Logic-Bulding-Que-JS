// Counting consecutive values

let arr = [1,1,0,1,1,1,0,1,1];

let currentcount = 0;
let maxcount = 0;

for (let i=0 ; i< arr.length; i++)
{
    if(arr[i] === 1)
    {
        currentcount++;
    

    if(currentcount > maxcount)
    {
        maxcount = currentcount;
    }
    }
    else
    {
        currentcount = 0;
    }
}

console.log(maxcount);