let arr = [-10,40,57,31,-89,-90];

let largestEven = -Infinity;

for( let i=0; i<arr.length; i++)
{
    if (arr[i] % 2 === 0 && arr[i] > largestEven) 
    {
        largestEven = arr[i];
    }
}

console.log(largestEven);