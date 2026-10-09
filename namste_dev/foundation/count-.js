let arr = [1,4,5,3,12,90];

let count = 0;

for (let i = 0; i < arr.length; i++) 
{
    if (arr[i] < 0)
    {
        count ++;
    }
}

console.log(count);