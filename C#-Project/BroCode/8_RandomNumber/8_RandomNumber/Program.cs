using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _8_RandomNumber
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Random random = new Random();

            int num1 = random.Next(1, 7);
            int num2 = random.Next(1, 7);
            int num3 = random.Next(1, 7);
            // double num = random.NextDouble();
            Console.WriteLine($"{num1}, {num2}, {num3}");

            Console.ReadKey();
        }
    }
}
