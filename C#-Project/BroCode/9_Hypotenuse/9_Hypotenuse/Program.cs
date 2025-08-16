using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Services;
using System.Text;
using System.Threading.Tasks;

namespace _9_Hypotenuse
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter side A: ");
            double a = Convert.ToDouble(Console.ReadLine());

            Console.Write("Enter side B: ");
            double b = Convert.ToDouble(Console.ReadLine());

            double c = Math.Sqrt((a * a) + (b * b));

            Console.WriteLine("The hypotenuse is: " + c);

            Console.ReadKey();
        }
    }
}
