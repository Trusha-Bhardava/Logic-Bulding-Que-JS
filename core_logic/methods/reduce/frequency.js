const fruits = ["apple","banana","cherry","apple","banana"];

const frequency = fruits.reduce((result,fruit) => {
    
    if(result[fruit])
    {
        result[fruit]++;
    }
    else
    {
        result[fruit]=1;
    }

    return result;

},{})

console.log(frequency);

