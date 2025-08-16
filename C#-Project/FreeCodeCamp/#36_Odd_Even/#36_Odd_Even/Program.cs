using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _36_Odd_Even
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("How many elements you want to enter?");
            Console.Write("Your answer: ");
            int N = int.Parse(Console.ReadLine());

            List<int> odd = new List<int>();
            List<int> even = new List<int>();

            for (int i = 0; i <= N ; i++)
            {
                if (i % 2 == 0)
                {
                    even.Add(i);
                }
                else
                {
                    odd.Add(i);
                }
            }

            Console.Write("\nPrinting odd numbers: ");
            foreach (int num in odd)
            {
                Console.Write($"{num} ");
            }

            Console.Write("\nPrinting even numbers: ");
            foreach (int num in even)
            {
                Console.Write($"{num} ");
            }

            Console.ReadKey();
        }
    }
}
