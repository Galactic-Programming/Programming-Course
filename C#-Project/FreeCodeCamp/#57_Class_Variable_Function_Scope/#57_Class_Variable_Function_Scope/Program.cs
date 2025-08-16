using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _57_Class_Variable_Function_Scope
{
    class BankAccount
    {
        // Class variables (fields)
        private string accountNumber;
        private double balance;

        // Constructor
        public BankAccount(string accountNumber, double initialBalance)
        {
            this.accountNumber = accountNumber;
            this.balance = initialBalance;
        }

        // Method to deposit money
        public void Deposit(double amount)
        {
            if (amount > 0)
            {
                balance += amount;
                Console.WriteLine($"Deposited: {amount}. New balance: {balance}");
            }
            else
            {
                Console.WriteLine("Deposit amount must be positive.");
            }
        }

        // Method to withdraw money
        public void Withdraw(double amount)
        {
            if (amount > 0 && amount <= balance)
            {
                balance -= amount;
                Console.WriteLine($"Withdrawn: {amount}. New balance: {balance}");
            }
            else
            {
                Console.WriteLine("Invalid withdrawal amount.");
            }
        }

        // Method to display account info
        public void DisplayInfo()
        {
            Console.WriteLine($"Account Number: {accountNumber}, Balance: {balance}");
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            // Creating an instance of BankAccount
            BankAccount account = new BankAccount("123456", 1000.0);

            // Calling methods to interact with the account
            account.Deposit(500.0);
            account.Withdraw(200.0);
            account.DisplayInfo();

            // Attempt to access class variables directly (will cause error if uncommented)
            // Console.WriteLine(account.accountNumber); // Error: 'accountNumber' is private

            // Example of function scope
            void ExampleFunction()
            {
                int localVar = 10; // Local variable
                Console.WriteLine($"Local variable value: {localVar}");
            }

            // Call the local function
            ExampleFunction();

            // Attempt to access local variable outside the function (will cause error if uncommented)
            // Console.WriteLine(localVar); // Error: 'localVar' does not exist in the current context

            Console.ReadLine();
        }
    }
}


