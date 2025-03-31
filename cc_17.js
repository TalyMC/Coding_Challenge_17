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

//Task 2
class SalesRep {
    constructor(name) {
        this.name = name;
        this.client = [];
    }
    addClient(customer) {
        this.client.push(customer);
    }
    getClientTotal(name) {
        const client = this.client.find(client => client.name === name);
        return client ? client.totalSpent() : 0;
    }
}

// SalesRep
const salesRep1 = new SalesRep("Alexander Hamilton");

// Assigning Customers
salesRep1.addClient(customer1);
salesRep1.addClient(customer2);

// Console Log
console.log(`Sales rep: ${salesRep1.name}, Client: ${customer1.name}, Total spent: $${salesRep1.getClientTotal(customer1.name)}`);
console.log(`Sales rep: ${salesRep1.name}, Client: ${customer2.name}, Total spent: $${salesRep1.getClientTotal(customer2.name)}`);

//Task 3
class VIPCustomer extends Customer {
    constructor (name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;
        this.purchaseHistory = [];
    }
    getTotalSpent() {
        const totalSpent = super.totalSpent();
        return totalSpent + (totalSpent * 0.10);//10% Bonus
    }
    details () {
         return `VIP Customer Name: ${this.name}, VIP Email: ${this.email}, VIP Level: ${this.vipLevel}, Total Spent: $${this.getTotalSpent()}`
    }
}
//VIP Customer
const vipCustomer1 = new VIPCustomer("Thomas Jefferson", "third_president@email.com", "Platinum");
const vipCustomer2 = new VIPCustomer("James Madison", "fourth_president@email.com", "Gold");

//VIP Customer Purchases
vipCustomer1.addPurchase(500);
vipCustomer1.addPurchase(300);
vipCustomer2.addPurchase(400);
vipCustomer2.addPurchase(200);

//Console.log
console.log(vipCustomer1.details())
console.log(vipCustomer2.details())

//Task 4
const allCustomers = [customer1, customer2, vipCustomer1, vipCustomer2];

const totalRevenue = allCustomers.reduce((total, customer) => total + customer.totalSpent(), 0);

const highSpendingCustomers = allCustomers.filter(customer => customer.totalSpent() > 500);

const customerSummary = allCustomers.map(customer => ({
    name: customer.name,
    totalSpent: customer.totalSpent()
}));

console.log(`Total revenue: $${totalRevenue}`);
console.log("High-spending customers:", highSpendingCustomers.map(c => c.name));
console.log("Customer Summary:", customerSummary)