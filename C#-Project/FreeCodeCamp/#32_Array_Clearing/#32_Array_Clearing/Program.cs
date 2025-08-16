using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _32_Array_Clearing
{
    internal class Program
    {   static void ClearArray(int[] array)
        {
            for (int i = 0; i < array.Length; i++)
            {
                array[i] = 0;
            }
        }
        static void Main(string[] args)
        {
            int[] numbers1 = { 5, 3, 8, 1, 2 };

            ClearArray(numbers1);
            Console.WriteLine("Array after clearing: ");
            foreach (int number in numbers1)
            {
                Console.Write($"{number} ");
            }
            Console.WriteLine();

            int[] numbers2 = new int[]
            { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

            Array.Clear(numbers2, 5, 3);

            //for (int i = 0; i < numbers2.Length; i++)
            //{
            //    numbers2[i] = default;
            //}
            foreach (var number in numbers2)
            {
                Console.Write($"{number} ");
            }

            Console.ReadKey();
        }
    }
}
