let arr = [3,2,2,4,5];

let val = 3;
let k = 0;

for (let i = 0; i < arr.length; i++)
{
    if (arr[i] !== val)
    {
        arr[k] = arr[i];
        k++;
    }
}

console.log(arr.slice(0,k));