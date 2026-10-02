// 8. Find the Sum of Even Numbers in an Array

let arr = [10, 15, 33, 25, 30];

let sum = 0;

for (let num of arr)
{
    if (num % 2 == 0)
    {
       sum +=num;
    }
}

console.log(sum);