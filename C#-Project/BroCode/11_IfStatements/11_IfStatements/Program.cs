using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11_IfStatements
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // If Statements = A basic form of decision making.

            Console.WriteLine("Please enter your age to sign up!");
            Console.Write("Your answer: ");
            int age = Convert.ToInt32(Console.ReadLine());

            if (age <= 0)
            {
                Console.WriteLine("You've been born yet!");
            }
            else if (age >= 18)
            {
                Console.WriteLine("You're now signed up!");
            }
            else
            {
                Console.WriteLine("You must be 18+ years old to sign up!");
            }

            Console.Write("Please enter your name: ");
            string name = Console.ReadLine();

            if (name == "")
            {
                Console.WriteLine("You did not enter your name yet!");
            }
            else
            {
                Console.WriteLine("Hello " + name);
            }

            Console.ReadKey();
        }
    }
}
