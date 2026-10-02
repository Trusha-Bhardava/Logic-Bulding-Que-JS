let target=60;
let index=-1;
let arr = [10, 20, 30, 40, 50];

for(i=0;i<arr.length;i++)
{
   if (arr[i]=== target)
   {
       index=i;
       break;
   }
}

if (index === -1) {
    console.log("number not found in list!");
} else {
    console.log("number is in list at index " + index);
}

console.log(index);