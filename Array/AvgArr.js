let arr = [40,30,30,5];

let sum =0;

for (let i=0; i<arr.length; i++)
{
    sum +=arr[i];
}

let average= sum / arr.length;

console.log(average);


// if let arr = []; array is empty then output NaN means not number ( 0/ 0 never divide)    . 