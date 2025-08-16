using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _21_ForEachLoop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // ForEach Loop = A simpler way to iterate over an array. but it's less flexible

            string[] colors = { "White", "Blue", "Pink" };

            /*for (int i = 0; i < colors.Length; i++)
            {
                Console.WriteLine(colors[i]);
            }*/

            foreach (string color in colors)
            {
                Console.WriteLine(color);
            }

            Console.ReadKey();
        }
    }
}
