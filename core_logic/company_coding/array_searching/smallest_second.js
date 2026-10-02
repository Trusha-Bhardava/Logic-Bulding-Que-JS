let arr = [12,54,36,77,25];

let smallest = 0;
let secondsmall = 0;

for(let i=0; i<=arr.length-1; i++)
    {
        if(arr[i] < smallest)
        {
           secondsmall = smallest;
           smallest = arr[i];
        }
        else if (arr[i] < secondsmall && arr[i] !== smallest)
        {
            secondsmall = arr[i];
        }
    }

    console.log(secondsmall);
