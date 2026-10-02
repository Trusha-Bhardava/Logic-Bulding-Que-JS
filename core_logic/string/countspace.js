let str = "i love pan cakes.";

let count  = 0;

for (let  i=0; i<str.length; i++)
{
    if(str[i] === " ")
    {
        count ++;
    }
}

console.log("space in sentence is " + count);