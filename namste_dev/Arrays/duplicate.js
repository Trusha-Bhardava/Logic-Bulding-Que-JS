let arr = [1,1,2,3,4,4];

let k = 1;
 
for (let i=0; i<arr.length; i++)
{
    if(arr[i] !== arr[k-1])
    {
        arr[k] = arr [i];
        k++;
    }
}

console.log(arr.slice(0, k));