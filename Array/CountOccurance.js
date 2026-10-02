let arr = [10,20,10,34,60,10];

let target=10;
let count=0;

for(let i=0; i <arr.length; i++ )
{
    if (arr[i] === target)
    {
        count ++;
    }
}

console.log("number of occurance is: " + count);