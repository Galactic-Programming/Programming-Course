using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _39_Void_Function
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //PrintGreeting();
            PrintGreeting("Alice");

            Console.ReadKey();
        }
        static void PrintGreeting(string name)
        {
            //Console.WriteLine("Hello, World!");
            Console.WriteLine($"Hello, {name}");
        }
    }
}
