const fields = [
    { name: "email", valid: true },
    { name: "password", valid: true },
    { name: "phone", valid: true }
];

const result = fields.every((field) => {
    return field.name === "phone","pasword","email"; 
})

console.log(result);