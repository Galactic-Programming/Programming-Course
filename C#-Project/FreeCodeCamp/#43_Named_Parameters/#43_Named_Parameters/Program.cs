using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _43_Named_Parameters
{
    internal class Program
    {
        static void Main(string[] args)
        {
            PrintDetails(name: "Alice", age: 30, department: "HR");
            PrintDetails(department: "IT", name: "Bob", age: 25);

            Console.ReadKey();
        }
        static void PrintDetails(string name, int age, string department)
        {
            Console.WriteLine($"Name: {name}, Age: {age}, Department: {department}");
        }
    }
}
