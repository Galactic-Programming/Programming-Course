using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _42_Optional_Parameters
{
    internal class Program
    {
        static int Add(int a, int b = default)
        {
            Console.WriteLine($"b = {b}");
            return a + b;
        }
        static void Main(string[] args)
        {
            int result = Add(20);
            Console.WriteLine(result);

            Console.ReadKey();
        }
    }
}
