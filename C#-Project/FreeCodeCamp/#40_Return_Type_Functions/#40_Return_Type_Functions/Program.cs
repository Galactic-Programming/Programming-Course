using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _40_Return_Type_Functions
{
    internal class Program
    {
        static string ReturnName()
        {
            return "Dante";
        }
        static int ReturnAge()
        {
            return 29;
        }
        static void PrintName()
        {
            Console.WriteLine($"Hello, my name is {ReturnName()} and my age is {ReturnAge()}");
        }
        static int Add(int x, int y) 
        {
            return x + y;
        }
        static string Greet(string name1)
        {
            return $"Hello, {name1}";
        }
        static bool IsEven(int number)
        {
            return number % 2 == 0;
        }
        static int ReadNumberFromConsole()
        {
            Console.Write("Enter a number: ");
            return Convert.ToInt32(Console.ReadLine());
        }
        static int[] CreatRandomArray()
        {
            int[] numbers = new int[6]
            {
                0, 1, 2, 3, 4, 5
            };
            return numbers;
        }
        static void Main(string[] args)
        {
            Console.Title = $"{ReturnName()} - {ReturnAge()}";
            PrintName();

            int sum = Add(5, 6);
            Console.WriteLine($"The sum of 5 and 6: {sum}");

            string message = Greet("Alice");
            Console.WriteLine(message);

            bool isEven = IsEven(sum);
            Console.WriteLine($"Is {sum} even? {isEven}");

            int[] numbers = new int[3];
            for (int i = 0; i < numbers.Length; i++)
            {
                numbers[i] = ReadNumberFromConsole();
            }

            Console.WriteLine();

            foreach (int number in numbers)
            {
                Console.Write($"{number} ");
            }

            int[] newNumbers = CreatRandomArray();

            foreach (int number in newNumbers)
            {
                Console.Write($"{number} ");
            }

            Console.Beep();
            Console.ReadKey();
        }
    }
}
