let arr = [10, 50, 20, 80, 30];

let largest = arr[0];
let smallest = arr[0];

for (let i=0; i<arr.length; i++)
{
    if (arr[i] > largest) {
        largest = arr[i];
    }

    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

let difference = largest - smallest;

console.log("Largest:", largest);
console.log("Smallest:", smallest);

console.log(difference);