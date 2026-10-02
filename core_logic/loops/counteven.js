let arr = [10, 45, 22, 89, 12];

let even = 0;

for(let i=0; i<arr.length; i++)
{
    if(arr[i] % 2 === 0)
    {
        even++;
    }
}

console.log("even number count is:" + even);