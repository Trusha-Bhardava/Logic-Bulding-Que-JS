let arr = [10,20,3,41,20,67];

// Because we need an actual value from the array to compare against
let largest = arr[0];

for (let i=0; i<arr.length; i++)
{
    if (arr[i] > largest)
    {
        largest = arr[i];
    }
}

console.log("largest number is :" + largest);