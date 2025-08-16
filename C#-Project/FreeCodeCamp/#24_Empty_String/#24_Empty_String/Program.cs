using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _24_Empty_String
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter your name: ");
            string name = Console.ReadLine();

            if (name == string.Empty)
            {
                Console.WriteLine($"Your name was not found.");
            }
            else
            {
                Console.WriteLine(name);
            }

            Console.ReadKey();
        }
    }
}
