using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _6_ArithmeticOperators
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int friends = 10;
            // friends = friends + 1;
            // friends += 1;
            // friends++;

            // friends = friends - 1;
            // friends -= 1;
            // friends--;

            // friends = friends * 2;
            // friends *= 2;

            // friends = friends / 2;
            // friends /= 2;

            int remainder = friends % 3;

            Console.WriteLine(friends);
            Console.WriteLine(remainder);

            Console.ReadKey();
        }
    }
}
