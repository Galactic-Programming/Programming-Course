using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _28_Print_String_InReverse
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter your message: ");
            string message = Console.ReadLine();

            for (int i = 0; i < message.Length; i++)
            {
                Console.Write(message[i]);
            }

            Console.WriteLine();

            for (int i = message.Length - 1; i >= 0; i--)
            {
                Console.Write(message[i]);
            }

            Console.ReadKey();
        }
    }
}
