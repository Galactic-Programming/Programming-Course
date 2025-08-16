using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11_InputOutput
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello there! My name is Yann");
            Console.Write("Please enter your name: ");
            string name = Console.ReadLine();
            // Console.WriteLine(name);

            Console.Write("Please enter your age: ");
            string ageInput = Console.ReadLine();
            int age = Convert.ToInt32(ageInput);
            // Console.WriteLine(age);

            Console.WriteLine("\nYour name is " + name + " and your age is " + age);

            Console.ReadKey();
        }
    }
}
