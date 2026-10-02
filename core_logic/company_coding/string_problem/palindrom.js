let str = "madam";

let left = 0;
let right = str.length - 1;

let palindrom = true;

while (left < right)
{
    if (str[left] != str[right])
    {
        palindrom = false;
        break;
    }
    left ++;
    right --;
}

console.log("palindrome is " + palindrom);