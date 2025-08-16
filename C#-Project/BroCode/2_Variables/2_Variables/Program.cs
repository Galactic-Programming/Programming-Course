using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2_Variables
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int x; // Declaration
            x = 123; // Initialization 
            int y = 321; // Declaration + Initialization at the same time
            int z = x + y;

            int age = 29;
            Console.WriteLine("Your age is " + age);
            double height = 167.5;
            Console.WriteLine("Your height is " + height);
            bool alive = false;
            Console.WriteLine("Are you still alive? " + alive);
            char symbol = '$';
            Console.WriteLine("Your symbol is " + symbol);
            string name = "Dante";
            string userName = symbol + name;
            Console.WriteLine("Your username is " + userName);

            Console.WriteLine(x);
            Console.WriteLine(y);
            Console.WriteLine(z);
            Console.ReadKey();
        }
    }
}
