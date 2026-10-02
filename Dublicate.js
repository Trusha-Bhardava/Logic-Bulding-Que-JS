// 7. Remove Duplicate Values from Array

let arr = [1,2,2,3,4,4,5];

/* I create an empty unique array to store only unique values. While looping through arr, I check whether the 
 current value already exists in unique. If it does not exist, I add it using push() */
let unique = [];

for (let num of arr)
{
// !means not so  condition is true only when  number does not exist.Then push() adds that number to unique array.
    if (!unique.includes(num))  // includes() checks whether num is already present in the unique array.
    {
        // Add the current number to the unique array only when it is not already present.
        unique.push(num);
    }
}

console.log(unique);



