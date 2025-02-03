//# Homework 1
// Create a Constructor function for product. Each product has property: name, category (string), hasDiscount (bool) and price.
// Create an array of 15 products. 

// Now answer the following requirements:

// * Find all products with price greater than 20.

// * Get the names of all products of Category Food, that are on discount.

// * Get the price of all products that are on discount.

// * Find the name and price of all products with name starting with a vowel, that are not on discount.
///

function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}

let products = [
    new Product("Apple", "Food", true, 1.22),
    new Product("Banana", "Food", false, 2),
    new Product("Orange", "Food", false, 3),
    new Product("Umbrella", "Accessories", false, 10),
    new Product("Eggs", "Food", true, 1.99),
    new Product("Shoes", "Clothing", false, 50),
    new Product("Shirt", "Clothing", true, 20),
    new Product("Milk", "Food", true, 8),
    new Product("Headphones", "Electronics", true, 55),
    new Product("Earrings", "Accessories", false, 60),
    new Product("Oats", "Food", true, 4),
    new Product("Laptop", "Electronics", false, 800),
    new Product("Studio Speakers", "Electronics", false, 500),
    new Product("Watch", "Accessories", true, 200),
    new Product("Mouse", "Electronics", true, 110)
]


let expensiveProducts = products
    .filter(product => product.price > 20);
console.log("Products with price greater than 20:", expensiveProducts);

let discountFoodNames = products
    .filter(product => product.category === "Food" && product.hasDiscount)
    .map(product => product.name);
console.log("Discounted food products names:", discountFoodNames);

let discountedPrices = products
    .filter(product => product.hasDiscount)
    .map(product => product.price);
console.log(`Prices of discounted products`, discountedPrices);

let vowels = ["A", "E", "I", "O", "U"];
let vowelProducts = products
    .filter(product => vowels.includes(product.name[0].toUpperCase()) && !product.hasDiscount)
    .map(product => ({name: product.name, price: product.price}));
console.log("Products with names starting with a vowel(AEIOU) and are not on discount", vowelProducts);





