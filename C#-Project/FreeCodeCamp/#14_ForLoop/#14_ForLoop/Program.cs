using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _14_ForLoop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hi");
            // Console.WriteLine("Hi");
            // Console.WriteLine("Hi");

            /*for (int i = 0; i < 3; i++)
            {
                Console.WriteLine("Hi");
                Console.WriteLine(i);
            }*/
            Console.WriteLine("What's the message you want to repeat? ");
            Console.Write("Enter the message: ");
            string message = Console.ReadLine();

            Console.WriteLine("How many times do you want repeat it?");
            Console.Write("Enter a number: ");
            int loopCounter = Convert.ToInt32(Console.ReadLine());

            if (loopCounter <= 0)
            {
                Console.WriteLine("\nInvalid value! Please enter a value above than 0!");
            }
            else
            {
                Console.WriteLine();
                for (int i = 0; i < loopCounter; i++)
                {
                    Console.WriteLine(message);
                }
            }

            Console.ReadKey();
        }
    }
}
