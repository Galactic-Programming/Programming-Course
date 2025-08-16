using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace _22_Methods
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Method = Performs a section of code , whenever it's called "invoked"
            //          Benefit (let's us reuse code without writing it multiple times)

            string name = "Heisenberg";
            int count = 3;

            Call(name, count);

            Console.ReadKey();
        }

        static void Call(string name, int count)
        {
            Console.WriteLine("Oh, come on...");
            Console.WriteLine("No, no, no... noooooooooo.");
            Console.WriteLine("WAIT! Wait, wait..... wait!");
            Console.WriteLine("Damn it, say my name" + name);
            Console.WriteLine("Say it " + count + " times!");
        }
    }
}
