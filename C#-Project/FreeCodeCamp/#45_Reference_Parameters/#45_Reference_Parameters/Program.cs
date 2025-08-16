using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace _45_Reference_Parameters
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Exp1:
            int number = 10;
            DoubleValue(ref number);
            Console.WriteLine($"Value after doubling: {number}");

            //Exp2:
            string name = "Joe Biden";
            Console.WriteLine($"The current US's president is: {name}");

            Console.Write("Enter the new president name: ");
            string newName = Console.ReadLine();

            if (ChangeName(ref name, newName))
            {
                Console.WriteLine($"The new US's president is: {name}");
            }
            else
            {
                Console.WriteLine("New name can not be empty or null!");
            }
            Console.ReadKey();
        }
        static void DoubleValue(ref int value)
        {
            //Exp1:
            value *= 2;
        }
        static bool ChangeName(ref string name, string newName)
        {
            //Exp2:
            if (!string.IsNullOrEmpty(newName))
            {
                name = newName;
                return true;
            }
            return false;
        }
    }
}
