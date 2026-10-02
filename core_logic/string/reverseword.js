let str = "hello world";

let result = "";

for( let i=str.length-1; i>=0; i--)
{
    result += str[i];
}

console.log("Reversed string is : " + result);