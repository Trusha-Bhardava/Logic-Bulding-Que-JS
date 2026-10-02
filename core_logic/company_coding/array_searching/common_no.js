const arr1 = [1,2,3,4];
const arr2 = [5,2,6,3];

const common = [];

for (let i=0; i<arr1.length; i++)
{
    if(arr1.includes(arr2[i]))
    {
        common.push(arr2[i]);
    }
}

console.log(common);