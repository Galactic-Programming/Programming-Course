using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _18_TryParse_Function
{
    internal class Program
    {
        static void Main(string[] args)
        {
            bool result = true;

            while (result)
            {
                Console.Write("Enter a number: ");
                string input = Console.ReadLine();
                // int number = 0;

                if (int.TryParse(input, out int number))
                {
                    Console.WriteLine($"Conversion successful: {number} ");
                    result = false;
                }
                else
                {
                    Console.WriteLine("Conversion failed!");
                }
            }

            Console.ReadKey();
        }
    }
}
