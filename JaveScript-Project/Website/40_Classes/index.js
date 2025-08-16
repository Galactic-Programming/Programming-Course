// Class = (ES6 Feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions.
// Ex. static keyword, encapsulation, inheritance, polymorphism, and more...

class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
        console.log(`Category: ${this.category}`);
    }
    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.07; // 7% sales tax

const product1 = new Product("Laptop", 999.99, "Electronics");
const product2 = new Product("Coffee Maker", 49.99, "Home Appliances");
const product3 = new Product("Running Shoes", 89.99, "Footwear");

// Display product details
// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();

// Calculate total prices with sales tax
// console.log(`Total price for product 1 with sales tax: $${product1.calculateTotal(salesTax).toFixed(2)}`);
// console.log(`Total price for product 2 with sales tax: $${product2.calculateTotal(salesTax).toFixed(2)}`);
// console.log(`Total price for product 3 with sales tax: $${product3.calculateTotal(salesTax).toFixed(2)}`);

// Class inheritance
class ElectronicProduct extends Product {
    constructor(name, price, category, warrantyPeriod) {
        super(name, price, category);
        this.warrantyPeriod = warrantyPeriod;
    }
    displayProduct() {
        super.displayProduct();
        console.log(`Warranty Period: ${this.warrantyPeriod} years`);
    }
    calculateTotal(salesTax) {
        const totalPrice = super.calculateTotal(salesTax);
        return totalPrice + (this.warrantyPeriod * 50); // Adding $50 for each year of warranty
    }
}
const electronicProduct1 = new ElectronicProduct("Smartphone", 799.99, "Electronics", 2);
const electronicProduct2 = new ElectronicProduct("Smart TV", 1499.99, "Electronics", 3);
const electronicProduct3 = new ElectronicProduct("Tablet", 499.99, "Electronics", 1);

// Display electronic product details
// electronicProduct1.displayProduct();
// electronicProduct2.displayProduct();
// electronicProduct3.displayProduct();

// Calculate total prices for electronic products with sales tax
// console.log(`Total price for electronic product 1 with sales tax: $${electronicProduct1.calculateTotal(salesTax).toFixed(2)}`);
// console.log(`Total price for electronic product 2 with sales tax: $${electronicProduct2.calculateTotal(salesTax).toFixed(2)}`);
// console.log(`Total price for electronic product 3 with sales tax: $${electronicProduct3.calculateTotal(salesTax).toFixed(2)}`);

// Class with static method
class ProductUtils {
    static calculateDiscountedPrice(price, discountPercentage) {
        return price - (price * (discountPercentage / 100));
    }
    static formatPrice(price) {
        return `$${price.toFixed(2)}`;
    }
}
// Example usage of static methods
const originalPrice = 100;
const discountPercentage = 20;

const discountedPrice = ProductUtils.calculateDiscountedPrice(originalPrice, discountPercentage);
console.log(`Discounted Price: ${ProductUtils.formatPrice(discountedPrice)}`);