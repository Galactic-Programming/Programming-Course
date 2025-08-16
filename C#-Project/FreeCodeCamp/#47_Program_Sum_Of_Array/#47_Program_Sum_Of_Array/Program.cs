using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _47_Program_Sum_Of_Array
{
    internal class Program
    {
        static int Enter()
        {
            Console.Write($"Enter the number of elements in this array: ");
            int number1;

            while (true)
            {
                if (int.TryParse(Console.ReadLine(), out number1) && number1 > 0)
                {
                    return number1;
                }
                else
                {
                    Console.WriteLine("Invalid input. Please enter a positive number: ");
                }
            }
        }
        static int GetNumbers()
        {           
            int number2;
            while (true)
            {
                if (int.TryParse(Console.ReadLine(), out number2))
                {
                    return number2;
                }
                else
                {
                    Console.WriteLine("Invalid input. Please enter a integer number: ");
                }
            }
        }
        static int SumOfNumbers1(int[] numbers)
        {
            //Sol1:
            int sum1 = 0;
            if (numbers.Length > 0)
            {
                foreach (var number3 in numbers)
                {
                    sum1 += number3;
                }
                return sum1;
            }
            return -1;
        }
        static bool SumOfNumbers2(int[] numbers, out int sum2)
        {
            //Sol2:
            sum2 = 0;
            if (numbers.Length > 0)
            {
                foreach (var number3 in numbers)
                {
                    sum2 += number3;
                }
                return true;
            }
            return false;
        }
        static void Main(string[] args)
        {
            int number = Enter();

            int[] numbers = new int[number];

            for (int i = 0; i < numbers.Length; i++)
            {
                Console.Write($"Enter element {i + 1}: ");
                numbers[i] = GetNumbers();
            }
            //Sol1:
            int sum = SumOfNumbers1(numbers);
            if (sum > -1)
            {
                Console.WriteLine($"The sum of the array elements is: {sum}");
            }
            else
            {
                Console.WriteLine("We can not add up an empty array!");
            }
            //Sol2:
            if (SumOfNumbers2(numbers, out int sum2))
            {
                Console.WriteLine($"The sum of the array elements is: {sum2}");
            }
            else
            {
                Console.WriteLine("We can not add up an empty array!");
            }

            Console.ReadKey();
        }
    }
}
