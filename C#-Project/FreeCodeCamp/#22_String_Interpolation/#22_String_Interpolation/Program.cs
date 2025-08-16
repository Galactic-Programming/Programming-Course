using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _22_String_Interpolation
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string name = "Dante";
            int age = 29;

            string greeting = $"Hello, my name is {name} and I am {age} years old.";

            Console.WriteLine(greeting);

            Console.ReadKey();
        }
    }
}
