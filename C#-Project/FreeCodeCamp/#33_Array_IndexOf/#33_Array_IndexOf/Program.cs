using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _33_Array_IndexOf
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = new int[]
            { 1, 2, 3, 4, 5 };

            Console.Write("Enter number to search: ");
            int search = Convert.ToInt32(Console.ReadLine());

            // int position = Array.IndexOf(numbers, search);
            // int position = Array.IndexOf(numbers, search, 2);
            int position = Array.IndexOf(numbers, search, 2, 3);

            if (position > -1)
            {
                Console.WriteLine($"Number {search} has been found at position {position + 1}!");
            }
            else
            {
                Console.WriteLine($"Number {search} has not been found!");
            }

            Console.ReadKey();
        }
    }
}
