using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _12_IfStatements
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Please enter yor name: ");
            string name = Console.ReadLine();

            Console.Write("Please enter your age: ");
            string ageInput = Console.ReadLine();
            int age = Convert.ToInt32(ageInput);

            Console.WriteLine($"\nYour name is {name} and your age is {age}");
            /*
            if (age >= 18 && age <= 25)
            {
                Console.WriteLine("You're between 18 and 25 years old!");
            }
            else if (age > 25)
            {
                Console.WriteLine("You're older then 25 years old!");
            }
            */

            if ( age < 0 || age > 150)
            {
                Console.WriteLine("Invalid age!");
            }
            else
            {
                if (age >= 18 && age <= 25)
                {
                    Console.WriteLine("You're between 18 and 25 years old!");
                }
                else if (age > 25)
                {
                    Console.WriteLine("You're older then 25 years old!");
                }
            }

            Console.Write("\nPlease enter the first number: ");
            string numberAInput = Console.ReadLine();
            int numberA = Convert.ToInt32(numberAInput);

            Console.Write("Please enter the second number: ");
            string numberBInput = Console.ReadLine();
            int numberB = Convert.ToInt32(numberBInput);

            int result = numberA * numberB;

            Console.Write($"\nValue of {numberA} x {numberB} is: ");
            string answerInput = Console.ReadLine();
            int answer = Convert.ToInt32(answerInput);

            if (answer == result)
            {
                Console.WriteLine("Correct!");
            }
            else
            {
                Console.WriteLine("Wrong!");
            }

            Console.ReadKey();
        }
    }
}
