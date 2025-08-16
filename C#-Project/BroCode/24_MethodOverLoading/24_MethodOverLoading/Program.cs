using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _24_MethodOverLoading
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Method Overloading = Method share same name, but different parameters
            //                      Name + parameters = signature
            //                      Methods must have a unique signature

            double total1;
            double total2;

            total1 = Multiply(2, 3, 4);
            total2 = Multiply(2, 3);

            Console.WriteLine(total1);
            Console.WriteLine(total2);
            Console.ReadKey();
        }

        static double Multiply(double a, double b)
        {
            return a * b;
        }

        static double Multiply(double a, double b, double c)
        {
            return a * b * c;
        }
    }
}
