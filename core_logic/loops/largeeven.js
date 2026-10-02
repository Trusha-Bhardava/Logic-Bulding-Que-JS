let arr = [10, 15, 20, 25, 30];

let largest = -Infinity;

for (let i=0; i<arr.length; i++)
{
    if (arr[i] % 2 === 0 && arr[i] > largest)
    {
        largest = arr[i];
    }
}

console.log("largest even number is: " + largest);