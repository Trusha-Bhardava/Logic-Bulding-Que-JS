// 4. Find Average of Array Elements

let arr = [40,30,30,5];

/* Before starting the loop, I initialize sum to 0 because I want to add all array values to it.  During each loop iteration, the current 
 array element is added to sum */

let sum =0;

// arr.length automatically gives the number of elements, so I don’t need to manually count them.

for (let i=0; i<arr.length; i++)
{
    sum +=arr[i];
}

let average= sum / arr.length;

console.log(average);


// if let arr = []; array is empty then output NaN means not number ( 0/ 0 never divide)    . 