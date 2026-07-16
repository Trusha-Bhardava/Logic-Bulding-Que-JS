// 5. Count Even and Odd Numbers

let arr = [1,5,4,2,6,3,8,9];

let even=0;
let odd=0;

for (let num of arr)
{
    if (num % 2 == 0)
    {
        even++;
    }
    else
    {
        odd++;
    }
}

console.log("even:", even);
console.log("odd:", odd);