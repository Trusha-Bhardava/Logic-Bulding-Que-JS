let arr = [10 ,20 ,10, 30, 10, 40];

let sum = 0;

for (let i=0; i<arr.length; i++)
{
    if (arr[i] % 2 === 0)
    {
        sum =sum + arr[i];
    }
}
console.log("Sum of even numbers is: " + sum);