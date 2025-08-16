using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _41_Function_Parameters
{
    internal class Program
    {
        static void PrintMessage(string message)
        {
            Console.WriteLine(message);
        }
        static int Add(int a, int b)
        {
            return a + b;
        }
        static void Greet(string name, string greeting = "Hello")
        {
            Console.WriteLine($"{greeting} {name}");
        }
        static void Main(string[] args)
        {
            PrintMessage("Hello World!");

            int sum = Add(1, 2);
            Console.WriteLine($"The sum of 1 and 2 is: {sum}");

            Greet("Alice");
            Greet("Bob", "Good Evening!");

            Console.ReadKey();
        }
    }
}
