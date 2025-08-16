using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _46_Program_Triangle
{
    internal class Program
    {
        static double Enter(string message)
        {
            Console.Write($"Please enter the {message} of the triangle: ");
            double number;
            while (true)
            {
                if (double.TryParse(Console.ReadLine(), out number) && number > 0)
                {
                    return number;
                }
                else
                {
                    Console.WriteLine("Invalid input. Please enter a positive number: ");
                }
            }
        }
        static double CalArea(double height, double width)
        {
            return 0.5 * height * width;
        }
        static void Main(string[] args)
        {          
            double height = Enter("height");  
            double width = Enter("width");

            double area = CalArea(height, width);
            Console.WriteLine($"Area of the trianglee is: {area}");

            Console.ReadKey();
        }
    }
}
