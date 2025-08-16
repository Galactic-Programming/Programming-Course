using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _38_Function
{
    internal class Program
    {
        static void Main(string[] args)
        {
            SayHello();

            int result = Add(3, 5);
            Console.WriteLine($"The sum of 3 and 5 is: {result}");

            Console.ReadKey();
        }
        static void SayHello() { Console.WriteLine("Hello, world!"); }
        static int Add(int x, int y) { return x + y; }
    }
}
