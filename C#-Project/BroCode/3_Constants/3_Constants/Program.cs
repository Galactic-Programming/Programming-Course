using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3_Constants
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Constants = immutable values which are known at compile time
            //             and do not change for the life of the program

            const double pi = 3.14159;
            Console.WriteLine(pi);

            Console.ReadKey();
        }
    }
}
