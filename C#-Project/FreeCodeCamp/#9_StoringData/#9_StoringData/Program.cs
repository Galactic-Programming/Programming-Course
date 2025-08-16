using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _9_StoringData
{
    internal class Program
    {
            /*
             * Define a variable to hold your name
             * Define a variable to hold your phone number
             * Define a variable to hold your age
             * Print variables line-by-line to the screen
             * Extra: define variables using the var keyword
            */
        static void Main(string[] args)
        {
            //string name = "Dante";
            //int phone = 0993293949;
            //int age = 29;

            var name = "Dante";
            var phone = "0993293949";
            var age = 29;

            Console.WriteLine("Your name is: " + name);
            Console.WriteLine("Your phone number is: " + phone);
            Console.WriteLine("Your age is: " + age);

            Console.ReadKey();
        }
    }
}
