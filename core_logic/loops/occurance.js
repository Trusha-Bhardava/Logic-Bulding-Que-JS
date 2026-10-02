let arr = [10, 20, 10, 30, 10, 40];

let target = 10;
let count = 0;

for (let i=0; i<arr.length; i++)
{
    if (arr[i] === target)
    {
        count++;
    }
}
console.log("Number of occurrences of target is: " + count);