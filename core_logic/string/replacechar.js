let str = "javascrept";

let result = "";

for(let i=0; i<str.length; i++)
{
    if (str[i] === "e")
    {
        result = result + "i";
    }
    else
    {
        result = result + str[i];
    }
}

console.log(result);