using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _51_Debug
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int a = 10;
            int b = 0;
            int result = Divide(a, b);
            Console.WriteLine($"Result: {result}");

            Console.ReadLine();
        }
        static int Divide(int a, int b)
        {
            return a / b;
        }
    }
}
