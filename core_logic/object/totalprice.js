const products = [
    {name: "laptop" , price:50000},
    {name: "mouse" , price:2000},
    {name: "keyboard" , price:1500}
];

let total = 0;

for (let i=0; i<products.length; i++)
{
  total = total + products[i].price;
}

console.log(total);