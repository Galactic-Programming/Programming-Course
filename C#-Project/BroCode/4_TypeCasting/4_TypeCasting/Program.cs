using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4_TypeCasting
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /* Type casting = Convert a value to a different data type
             *                Useful when we accept user input (String)
             *                Different data types can do different things
            */

            double a = 3.14;
            int b = Convert.ToInt32(a);

            Console.WriteLine("Type value of a: " + a.GetType());
            Console.WriteLine("Type value of b: " + b.GetType());
            Console.WriteLine(b + "\n");

            int c = 123;
            double d = Convert.ToDouble(c) + 0.1;

            Console.WriteLine("Type value of c: " + c.GetType());
            Console.WriteLine("Type value of d: " + d.GetType());
            Console.WriteLine(d + "\n");

            int e = 321;
            string f = Convert.ToString(e);

            Console.WriteLine("Type value of e: " + e.GetType());
            Console.WriteLine("Type value of f: " + f.GetType());
            Console.WriteLine(f + "\n");

            string g = "$";
            char h = Convert.ToChar(g);

            Console.WriteLine("Type value of e: " + g.GetType());
            Console.WriteLine("Type value of f: " + h.GetType());
            Console.WriteLine(h + "\n");

            string i = "true";
            bool j = Convert.ToBoolean(i);

            Console.WriteLine("Type value of e: " + i.GetType());
            Console.WriteLine("Type value of f: " + j.GetType());
            Console.WriteLine(j + "\n");


            Console.ReadKey();
        }
    }
}
