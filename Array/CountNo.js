// 5. Count Even and Odd Numbers

let arr = [1,5,4,2,6,3,8,9];

/* I initialize even and odd with 0 because initially no numbers have been counted. Whenever the loop finds an even
 number, even++ increases the even count by one. Otherwise, odd++ increases the odd count by one.*/

let even=0;
let odd=0;

/* we also used for...of because it directly gives each value from the array. Since I only need to check whether each 
 number is even or odd, I do not need the array index. 
  for (let num of arr)
*/

for (let i=0; i<arr.length; i++)
{
    if (arr[i] % 2 === 0) 
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



/* If the array is empty, the for...of loop does not execute because there are no elements to iterate over. 
 Both even and odd remain 0, so the output is even: 0 and odd: 0 */