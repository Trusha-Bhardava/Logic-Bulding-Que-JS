let arr = [10, 45, 23, 89, 12];

let smallest = arr[0];

for (let i=0; i<arr.length; i++)
{
    if (arr[i] < smallest)
    {
        smallest = arr[i];
    }
}
console.log("smallest number is :" + smallest);