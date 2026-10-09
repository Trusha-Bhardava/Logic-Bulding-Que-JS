let arr = [2,0,1];

let n = arr.length;

let expectedsum = n * (n + 1) / 2;

let actualsum =0;


for (let i=0; i<arr.length; i++)
{
    actualsum = actualsum + arr[i];
}

let missingno = expectedsum - actualsum;

console.log(missingno);

