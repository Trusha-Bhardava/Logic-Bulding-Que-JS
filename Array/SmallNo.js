// 2. Find the Smallest Number in an Array

let arr = [10,50,30,60,20];

let smallest = arr[0];

for (let i=0; i<arr.length; i++)
{
    if (arr[i] < smallest)
    {
        smallest =arr[i];
    }
}

console.log(smallest);