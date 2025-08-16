using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _25_String_Equals_Function
{
    internal class Program
    {
        static void Main(string[] args)
        {

            string string1 = "Hello, World!";
            string string2 = "Hello, World!";
            string string3 = "hello, world!";

            // So sánh hai chuỗi văn bản bằng nhau
            bool areEqual1 = string1.Equals(string2);
            Console.WriteLine($"Are string1 and string2 equal? {areEqual1}");

            // So sánh hai chuỗi văn bản không phân biệt chữ hoa/chữ thường
            bool areEqual2 = string1.Equals(string3, StringComparison.OrdinalIgnoreCase);
            Console.WriteLine($"Are string1 and string3 equal (ignoring case)? {areEqual2}");

            // So sánh hai chuỗi văn bản có phân biệt chữ hoa/chữ thường
            bool areEqual3 = string1.Equals(string3, StringComparison.Ordinal);
            Console.WriteLine($"Are string1 and string3 equal (considering case)? {areEqual3}");

            Console.WriteLine();

            string message = "Hello";
            string compare = "Hello";

            if (message.Equals(compare))
            {
                Console.WriteLine("Same!");
            }
            else
            {
                Console.WriteLine("Different!");
            }

            Console.Write("\nEnter your name: ");
            string name = Console.ReadLine();

            if (!name.Equals(""))
            {
                Console.WriteLine($"Your name is {name}.");
            }
            else
            {
                Console.WriteLine("Invalid name!");
            }

            char[] chars = { 'H', 'e', 'l', 'l', 'o' };
            object newCompare = new string(chars);

            if (message.Equals(newCompare))
            {
                Console.WriteLine("\nSame!");
            }
            else
            {
                Console.WriteLine("\nDifferent!");
            }

            Console.ReadKey();
        }

    }
}

