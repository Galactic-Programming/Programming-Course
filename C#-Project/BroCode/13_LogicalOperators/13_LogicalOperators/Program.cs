using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _13_LogicalOperators
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Logical Operators = Can be used to check if more than 1 condition is true/false
            // && (And)
            // (Or)

            Console.WriteLine("What's the temperature outside (C): ");
            double temp = Convert.ToDouble(Console.ReadLine());

            if (temp >= 15 &&  temp <= 25)
            {
                Console.WriteLine("It's warm outside!");
            }
            else if (0 <= temp && temp <= 10)
            {
                Console.WriteLine("It's cold outside!");
            }
            else
            {
                Console.WriteLine("Do not go outside!");
            }

            Console.ReadKey();
        }
    }
}
