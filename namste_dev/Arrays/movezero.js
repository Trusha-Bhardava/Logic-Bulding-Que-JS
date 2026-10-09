let arr = [0,1,2,4,0,2,9,6,0,8];

let k = 0;

for (let i=0; i < arr.length; i++)
{
    if(arr[i] !== 0 )
    {
        arr[k] = arr[i];
        k++;
    }
}

while ( k < arr.length)
{
    arr[k] = 0;
    k++;
}

console.log(arr);