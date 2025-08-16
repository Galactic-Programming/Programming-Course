using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _16_NestLoop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Nested Loop = Loop inside another loop
            //               Uses vary. Used a lot in sorting algorithms

            Console.WriteLine("How many rows?");
            Console.Write("Your choice: ");
            int rows = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("How many columns?");
            Console.Write("Your choice: ");
            int columns = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("What symbol?");
            Console.Write("Your choice: ");
            string symbol = Console.ReadLine();

            Console.WriteLine();

            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < columns; j++)
                {
                    Console.Write(symbol);
                }
                Console.WriteLine();
            }

            Console.ReadKey();
        }
    }
}
