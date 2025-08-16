using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _34_List
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("How many elements you want to enter?");
            Console.Write("Your answer: ");
            int N = Convert.ToInt32(Console.ReadLine());

            List<int> list = new List<int>(N);

            for (int i = 0; i < N; i++)
            {
                Console.Write("Enter a number: ");
                list.Add(Convert.ToInt32(Console.ReadLine()));
            }

            foreach (int number in list)
            {
                Console.Write($"{number} ");
            }

            Console.Write("\nEnter the number you want to remove: ");
            int I = Convert.ToInt32(Console.ReadLine());
            list.Remove(I);

            Console.Write($"\nList of numbers after removing {I}: ");
            foreach (int number in list)
                { Console.Write($"{number} "); }
            Console.WriteLine();

            int firstnumber = list[0];
            Console.WriteLine($"\nFirst number in the list: {firstnumber}");

            int count = list.Count;
            Console.WriteLine($"\nNumber of elements in the list: {count}");

            Console.ReadKey();
        }
    }
}
