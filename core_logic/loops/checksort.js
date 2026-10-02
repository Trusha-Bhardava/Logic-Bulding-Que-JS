let arr = [10, 20, 30, 40, 50];

let sorted = true;

for (let i=0; i<arr.length; i++)
{
    if( arr[i] >  arr[i+1])
    {
       sorted = false;
       break;
    }
}

console.log(sorted);