using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _19_Times_Table
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter a number: ");
            int number = Convert.ToInt32(Console.ReadLine());

            for (int i = 1; i <= number; i++)
            {
                bool Fizz = i % 3 == 0;
                bool Buzz = i % 5 == 0;
                // Console.WriteLine($"{i} x {number} = {i * number}");
                if (Fizz && Buzz)
                {
                    Console.WriteLine("FizzBuzz");
                }
                else if (Fizz)
                {
                    Console.WriteLine("Fizz");
                }
                else if (Buzz)
                {
                    Console.WriteLine("Buzz");
                }
                else
                {
                    Console.WriteLine(i);
                }
            }
            Console.ReadKey();
        }
    }
}
