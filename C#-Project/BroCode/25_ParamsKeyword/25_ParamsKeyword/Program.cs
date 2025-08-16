using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _25_ParamsKeyword
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Params Keyword = A method parameter that takes a variable number of arguments.
            //                  The parameter type must be a single - dimensional array.

            double total = CheckOut(3.99, 5.20, 4.25, 1.35, 5.01);

            Console.WriteLine(total);

            Console.ReadKey();
        }
        static double CheckOut(params double[] prices)
        {
            double total = 0;

            foreach (double price in prices)
            {
                total += price;
            }
            return total;
        }
    }
}
