using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _52_Local_Auto_Window
{
    internal class Program
    {
        static int Add(int x, int y)
        {
            return x + y;
        }
        static int Subtract(int x, int y) 
        { 
            return x - y; 
        }
        static void Main(string[] args)
        {
            int a = 10;
            int b = 5;
            int sum = Add(a, b);
            int diff = Subtract(a, b);

            Console.WriteLine($"Sum: {sum}");
            Console.WriteLine($"Difference: {diff}");

            Console.ReadLine();
        }
    }
}
