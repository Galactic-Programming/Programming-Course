using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _26_ExceptionHandling
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Exception = Errors that occur during execution

            /*
             * Try = Try some code that is considered "dangerous"
             * Catch = Catches and handles exception when they occur
             * Finally = Always executes regardless if exception is caught or not
            */

            int x, y;
            double result;

            try
            {
                Console.Write("Enter number for X: ");
                x = Convert.ToInt32(Console.ReadLine());

                Console.Write("Enter number for Y: ");
                y = Convert.ToInt32(Console.ReadLine());

                result = x / y;

                Console.WriteLine("The result: " + result);

            }
            catch (FormatException)
            {
                Console.WriteLine("Please enter number only!");
            }
            catch (DivideByZeroException)
            {
                Console.WriteLine("You can't divide a number by zero!");
            }
            finally
            {
                Console.WriteLine("Our lesson end here!");
            }
            

            Console.ReadKey();
        }
    }
}
