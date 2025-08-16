using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10_OddEvenChecker
{
    /*
     * Create & initalise two ins
     * Make a variable to work out the remainder
     * Output remainder to the screen
     * Change the first int variable to another number 
     * and recalculate the remainder then output new remainder to the screen 
    */ 
    internal class Program
    {
        static void Main(string[] args)
        {
            int num1 = 10;
            int num2 = 2;
            int remainder = num1 % num2;
            Console.WriteLine(remainder);

            num1 = 11;
            remainder = num1 % num2;
            Console.WriteLine(remainder);

            Console.ReadKey();
        }
    }
}
