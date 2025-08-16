using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _27_String_IsNull_Or_Empty
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter your name: ");
            string name = Console.ReadLine();

            Console.WriteLine($"Your name is: {name}");

            //if (name != "")
            //{
            //    Console.WriteLine("0");
            //}

            //if (!name.Equals(""))
            //{
            //    Console.WriteLine("1");
            //}

            if (!string.IsNullOrEmpty(name))
            {
                if (name.Equals("Bosco"))
                {
                    Console.WriteLine("That's correct, your name!");
                }
                Console.WriteLine("2");
            }

            Console.ReadKey();
        }
    }
}
