//Task 1
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }
    
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }
    
    totalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
    
    details() {
        return `Customer Name: ${this.name}, Customer Email: ${this.email}, Total Spent: $${this.totalSpent()} `;
    }
}

// Customers
const customer1 = new Customer("George Washington", "og_president@email.com");
const customer2 = new Customer("Abraham Lincoln", "tophaticon1861@email.com");

// Purchases
customer1.addPurchase(150);
customer1.addPurchase(40);
customer2.addPurchase(60);
customer1.addPurchase(200);

// Console Log
console.log(customer1.details());
console.log(customer2.details());