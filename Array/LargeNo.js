// 1. Find the Largest Number in an Array

let arr = [10,80,30,2,70];

// if largest=0 then it comapre with 0 intially not with 10 
let largest = arr[0];

for ( let i=1; i<arr.length; i++ )
{
    if (arr[i] > largest)
    {
        largest = arr[i];
    }
}

console.log(largest);