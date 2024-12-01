// Constructor for Account object
function Account(accountNumber, owner, balance) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance || 0;  // Default balance is 0
}

// Method to deposit funds
Account.prototype.deposit = function(amount) {
    this.balance += amount;
    return `Deposited ${amount}. New balance: ${this.balance}`;
};

// Method to withdraw funds
Account.prototype.withdraw = function(amount) {
    if (this.balance >= amount) {
        this.balance -= amount;
        return `Withdrew ${amount}. New balance: ${this.balance}`;
    } else {
        return `Insufficient funds. Current balance: ${this.balance}`;
    }
};

// Method to calculate compound interest
Account.prototype.calculateInterest = function(rate, time) {
    const interest = this.balance * Math.pow((1 + rate / 100), time) - this.balance;
    return `Interest for ${time} years at rate ${rate}%: ${interest.toFixed(2)}`;
};

// Creating an account
let account1 = new Account(12345, 'John Doe', 1000);

// Sample operations
console.log(account1.deposit(500));             // Deposit
console.log(account1.withdraw(300));            // Withdraw
console.log(account1.calculateInterest(5, 2));  // Calculate interest for 2 years at 5% rate
