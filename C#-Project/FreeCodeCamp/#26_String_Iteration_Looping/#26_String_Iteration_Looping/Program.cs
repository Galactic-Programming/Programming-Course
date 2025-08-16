using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace _26_String_Iteration_Looping
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string message = "Hello World!";

            for (int i = 0; i < message.Length; i++) 
            {
                Console.Write(message[i]);
                Thread.Sleep(200);
            }
            Console.WriteLine("\nIs message contains [C]?");
            Console.WriteLine(message.Contains("C"));

            bool contains;
            Console.WriteLine("\nIs message contains [o]?");

            for (int i = 0; i < message.Length; i++)
            {
                if (message[i].Equals('o'))
                {
                    contains = true;
                }
                else
                {
                    contains = false;
                }
                Console.WriteLine(contains);
            }

            Console.ReadKey();
        }
    }
}
