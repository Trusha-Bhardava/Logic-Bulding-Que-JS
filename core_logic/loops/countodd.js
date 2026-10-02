let arr = [10, 15, 22, 31, 40, 51];

let odd = 0;

for (let i=0; i<arr.length; i++)
{
    if(arr[i] % 2 !== 0)
    {
        odd++;
    }
}
console.log("odd number count is:" + odd);