class BankAccount {
    constructor (accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    // deposit), withdrawing (withdraw), and checking balance (checkBalance).

    deposit(amount) {
        this.balance += amount;
        console.log(`Happy days ${this.accountHolder}! You have deposited £${amount}, you now have £${this.balance} in your account.`);
    }

    withdraw(amount) { 
        this.balance -= amount;
         console.log(`Hello ${this.accountHolder}. For your reference you have withdrawn £${amount}, you now have £${this.balance} in your account.`);
    }

    checkBalance() {
         console.log(`Hi ${this.accountHolder}, your current balance is £${this.balance}.`);

    }

}

export default BankAccount;