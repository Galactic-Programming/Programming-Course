using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _15_ForLoop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // For Loop = repeats some code a finite amount of times

            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine(i);
            }

            for (int i = 10; i > 0; i--)
            {
                Console.WriteLine("Happy New Year!");
            }

            Console.ReadKey();
        }
    }
}
