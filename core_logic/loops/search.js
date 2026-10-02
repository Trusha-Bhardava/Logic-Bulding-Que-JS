let arr = [10, 20, 30, 40, 50];

let target = 30;
let found = false;

for (let i=0; i<arr.length; i++)
{
    if (arr[i] === target)
    {
        found = true;
        break;
    }
}

console.log("found:" + found);