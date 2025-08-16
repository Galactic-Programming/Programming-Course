using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _23_ReturnKeyword
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Return = Return data back to the place where method is invoked.

            double x;
            double y;
            double result;

            Console.Write("Please enter number 1: ");
            x = Convert.ToDouble(Console.ReadLine());

            Console.Write("Please enter number 2: ");
            y = Convert.ToDouble(Console.ReadLine());

            result = Multiply(x, y);
            Console.WriteLine("The result is: " + result);

            Console.ReadKey();
        }

        static double Multiply(double x, double y)
        {
            // double z = x * y;
            return x * y;
        }
    }
}
