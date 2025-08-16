using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _20_Arrays
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Array = a variable that can store muultiple values. Fixed size

            // string[] colors = { "White", "Blue", "Yellow", "Pink", "Green", "Red" };
            string[] colors = new string[6];

            colors[0] = "White";
            colors[1] = "Blue";
            colors[2] = "Yellow";
            colors[3] = "Pink";
            colors[4] = "Green";
            colors[5] = "Red";

            for (int i = 0; i < colors.Length; i++)
            {
                Console.WriteLine(colors[i]);
            }

            Console.ReadKey();
        }
    }
}
