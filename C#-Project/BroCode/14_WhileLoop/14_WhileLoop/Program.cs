using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _14_WhileLoop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // While loop = Repeats some code while some condition remains true.

            Console.Write("Enter your name: ");
            string name = Console.ReadLine();

            while (name == "")
            {
                Console.WriteLine("Do not leave your name empty!");
                Console.Write("Enter your name: ");
                name = Console.ReadLine();
            }
            Console.WriteLine("Hello " + name);
        }
    }
}
