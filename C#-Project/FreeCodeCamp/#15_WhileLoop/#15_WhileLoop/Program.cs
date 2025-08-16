using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _15_WhileLoop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Console.Write("Enter a number: ");
            //int number = Convert.ToInt32(Console.ReadLine());

            /*for (int i = 1; i <= number; i++)
            {
                Console.Write(i + " ");
            }*/

            //int i = 0;

            //while (i < number)
            //{
            //    Console.Write(i + " ");
            //    i++;
            //}
            //Console.WriteLine();

            Console.Write("Enter the first number: ");
            int number1 = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter the second number: ");
            int number2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine($"What's the value of {number1} x {number2}? \n");
            int result = number1 * number2;

            Console.Write("Your answer is: ");
            int answer = 0;

            /*while (result != answer)
            {
                answer = Convert.ToInt32(Console.ReadLine());
                if (answer == result)
                {
                    Console.WriteLine("Correct!\n");
                }
                else
                {
                    Console.WriteLine("Incorrect!\n");
                    Console.Write("Try again: ");
                }
            }*/

            do
            {
                answer = Convert.ToInt32(Console.ReadLine());
                if (answer == result)
                {
                    Console.WriteLine("Correct!\n");
                }
                else
                {
                    Console.WriteLine("Incorrect!\n");
                    Console.Write("Try again: ");
                }
            } while (result != answer);

            Console.ReadKey();
        }
    }
}
