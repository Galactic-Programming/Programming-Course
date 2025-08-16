using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _28_StringInterpolation
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // String Interpolation = Allows us to insert variables into a string literal
            //                        precde a string literal with $
            //                        {} are placeholders

            string firstName = "Dante";
            string lastName = "Yann";
            int age = 29;

            // Console.WriteLine("Hello" + firstName + " " + lastName + ".");
            // Console.WriteLine("You're " + age + " years old!");

            Console.WriteLine($"Hello {firstName} {lastName}!");
            Console.WriteLine($"You're {age} years old!");

            Console.WriteLine($"You're {age,5} years old!");
            Console.WriteLine($"You're {age,-5} years old!");

            Console.ReadKey();
        }
    }
}
