let arr = [10, 20, 30, 40, 50, 60, 70];

let target = 80;

let left = 0;
let right = arr.length - 1;
let flag = false;

while(left <= right)
{
   let mid = ((left + right) /2);

   if (arr[mid] === target)
   {
    console.log("found value " + target);
    break;
   }
   

   if (arr[mid] < target)
   {
    left = mid + 1;
   }
   else
   {
    right = mid - 1;
   }
}

if (flag === false)
{
    console.log("not found");
}