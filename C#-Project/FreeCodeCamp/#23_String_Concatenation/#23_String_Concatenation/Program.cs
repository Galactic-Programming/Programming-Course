using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _23_String_Concatenation
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string name = "Alice";
            int age = 30;
            string greeting = $"Hello, my name is {name} and I am {age} years old.";
            string test1 = string.Concat(greeting);
            string test2 = string.Concat("Hello, my name is ", name, " and I am ", age, " years old");

            Console.WriteLine(greeting);
            Console.WriteLine(test1);
            Console.WriteLine(test2);

            Console.ReadKey();
        }
    }
}
