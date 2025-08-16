using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _37_Array_Of_Multiples
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter a number: ");
            int num = int.Parse(Console.ReadLine());
            Console.Write("Enter the length: ");
            int length = int.Parse(Console.ReadLine());

            int[] results = new int[length];
            int counter = 0;

            for (int i = 1; i <= results.Length; i++, counter++)
            {
                results[counter] = num * i;
            }

            foreach (int i in results)
            {
                Console.Write($"{i} ");
            }

            Console.ReadKey();
        }
    }
}
