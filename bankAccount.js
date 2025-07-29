class BankAccount {
    constructor (accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    // deposit), withdrawing (withdraw), and checking balance (checkBalance).

    deposit(amount) {
        this.balance += amount;
        console.log(`You have deposited £${amount}, you now have £${this.balance} in your account.`);
    }

    withdraw(amount) { 
        this.balance -= amount;
         console.log(`You have withdrew £${amount}, you now have £${this.balance} in your account.`);
    }

    checkBalance() {
         console.log(`Hi ${this.accountHolder}, your current balance is £${this.balance}.`);

    }

}