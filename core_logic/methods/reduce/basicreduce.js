const numbers = [1,4,22,46,6,7];

const total = numbers.reduce((total , num) => {
    return total + num ;
},0)

console.log(total);