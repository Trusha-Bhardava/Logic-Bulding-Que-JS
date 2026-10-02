let arr = [15,94,85,96,88];

let largest = 0;
let secondlargest = 0;

for(let i=0; i<=arr.length-1; i++)
{
    if(arr[i] > largest)   // 15 > 0 
    {   
        secondlargest = largest;   //  0 = 0 
        largest = arr[i]; 
    }
    else if(arr[i] > secondlargest && arr[i] !== largest)
    {
        secondlargest = arr[i];
    }
}

console.log(secondlargest);