import BankAccount from "./bankAccount.js";

const account1 = new BankAccount(76578900, "Peter Pan", 50);
const account2 = new BankAccount(70690803, "Charles Dickens", 0);
const account3 = new BankAccount(77894678, "Miss Marple", 5000);

// Depositing
account1.deposit(100);
account2.deposit(25);
account3.deposit(1000);

// Withdrawing
account1.withdraw(10);
account2.withdraw(5);
account3.withdraw(475);

// Balance Check
account1.checkBalance();
account2.checkBalance();
account3.checkBalance();



