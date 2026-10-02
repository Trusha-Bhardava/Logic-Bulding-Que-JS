const arr = [1,2,3,5,6];

const n = arr.length + 1;

let expectsum = 0;
let actualsum = 0;

for (let i=1; i<=n; i++)
{
    expectsum = expectsum + i;
}

for (let i=0; i<arr.length; i++)
{
        actualsum = actualsum + arr[i];
}   

const missno = expectsum - actualsum;

console.log(missno);