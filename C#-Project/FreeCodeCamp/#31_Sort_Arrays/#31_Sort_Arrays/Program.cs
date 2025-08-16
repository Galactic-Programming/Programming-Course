using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _31_Sort_Arrays
{
    internal class Program
    {
        static void BubbleSort(int[] array)
        {
            int n = array.Length;
            for (int i = 0; i < n - 1; i++)
            {
                for (int j = 0; j < n - i - 1; j++)
                {
                    if (array[j] > array[j + 1])
                    {
                        int temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Array before sort: ");
            int[] numbers = { 1, 7, 8, 0, 3, 9, 6, 4, 2, 5 };
            foreach (int i in numbers)
            {
                Console.Write($"{i} ");
            }

            Array.Sort(numbers);
            Console.WriteLine("\nSorted array in ascending order: ");
            foreach (int number in numbers)
            {
                Console.Write($"{number} ");
            }

            Array.Reverse(numbers);
            Console.WriteLine("\nSorted array in descending order: ");
            foreach (int number in numbers)
            {
                Console.Write($"{number} ");
            }

            Console.WriteLine();

            Console.WriteLine("\nArray before sort: ");
            int[] numbers1 = { 5, 3, 8, 1, 2, 7, 4, 9, 6, };
            foreach (int number in numbers1)
            {
                Console.Write($"{number} ");
            }

            BubbleSort(numbers1);
            Console.WriteLine("\nSorted array in ascending order:");
            foreach (int number in numbers1)
            {
                Console.Write($"{number} ");
            }

            Console.ReadKey();
        }
    }
}
