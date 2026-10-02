const carts = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        quantity: 2
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        quantity: 1
    }
];

const total = carts.reduce((sum, cart) => {
    return sum + (cart.price * cart.quantity);
}, 0);

console.log(total);