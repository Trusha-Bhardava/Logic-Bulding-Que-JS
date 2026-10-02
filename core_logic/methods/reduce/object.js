const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

const total = products.reduce((sum, product) => {
    return sum + product.price;
},0)

console.log(total);