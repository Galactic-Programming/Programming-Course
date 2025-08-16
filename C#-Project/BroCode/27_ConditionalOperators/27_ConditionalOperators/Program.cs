using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _27_ConditionalOperators
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Conditional Operators = used in conditional assignment if a condition is true or false.
            // (Condition) ? x : y

            double Temp = 20;
            string message;

            message = (Temp >= 15) ? "It's warm outside" : "It's cold outside";

            Console.WriteLine(message);

            Console.ReadKey();
        }
    }
}
