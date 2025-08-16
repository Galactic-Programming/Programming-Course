using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _30_Array
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter a number for [N]: ");
            int N = Convert.ToInt32(Console.ReadLine());
            int[] numbers = new int[N];

            for (int i = 0; i < numbers.Length; i++)
            {
                Console.Write($"Enter a number at index[{i}]: ");
                numbers[i] = Convert.ToInt32(Console.ReadLine());
            }

            for (int i = 0; i < numbers.Length; i++)
            {
                Console.WriteLine($"Element at index {i}: {numbers[i]}");
            }

            string[] names = { "Alice", "Bob", "Charlie" };

            foreach (string name in names)
            {
                Console.WriteLine(name);
            }

            const int angleCount = 3;
            int[] angles = new int[angleCount];

            for (int i = 0; i < angleCount; i++)
            {
                Console.Write($"Enter angle[{i + 1}]: ");
                angles[i] = Convert.ToInt32(Console.ReadLine());
            }
            int angleSum = 0;
            foreach (var angle in angles)
            {
                angleSum += angle;
            }
            Console.WriteLine(angleSum == 180 ? "Valid" : "Invalid");

            Console.ReadKey();
        }
    }
}
