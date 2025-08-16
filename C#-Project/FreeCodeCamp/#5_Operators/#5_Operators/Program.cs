using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _5_Operators
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double age = 29;
            Console.WriteLine("Original age: " + age);

            age++;
            age += 1;
            age = age + 1;
            Console.WriteLine("Plus age: " + age);

            age--;
            age -= 1;
            age = age - 1;
            Console.WriteLine("Minus age: " + age);

            age *= 10;
            Console.WriteLine("Multiplied age: " + age);
            age /= 10;
            Console.WriteLine("Divide age: " + age);

            string name = "Dante";
            name += " is programming";
            Console.WriteLine(name);

            char ch = 'a';
            ch++;
            Console.WriteLine(ch);

            int i = 0;
            Console.WriteLine(i);
            Console.WriteLine(i++);
            Console.WriteLine(i);
            Console.WriteLine(++i);

            Console.ReadKey();
        }
    }
}
