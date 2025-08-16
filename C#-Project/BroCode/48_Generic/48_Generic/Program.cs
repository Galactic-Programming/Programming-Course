using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _48_Generic
{
    public class Box<T>
    {
        private T _value;
        public Box(T value) { _value = value; }
        public T GetValue() { return _value; }
        public void SetValue(T value) { _value = value; }
    }
    internal class Program
    {
        /*public static void DisplayElements(int[] array)
        {
            foreach (int item in array)
            {
                Console.Write($"{item} ");
            }
            Console.WriteLine();
        }
        public static void DisplayElements(double[] array)
        {
            foreach (double item in array)
            {
                Console.Write($"{item} ");
            }
            Console.WriteLine();
        }
        public static void DisplayElements(string[] array)
        {
            foreach (string item in array)
            {
                Console.Write($"{item} ");
            }
            Console.WriteLine();
        }*/
        public static void DisplayElements<T>(T[] array)
        {
            foreach (T item in array)
            {
                Console.Write($"{item} ");
            }
            Console.WriteLine();
        }
        static void Main(string[] args)
        {
            // Generic = "Not specific to a particular data type"
            //           and <T> to: classes, methods, fields, etc...
            //           allows for code reusability for different data types.

            Box<int> intBox = new Box<int>(123);
            Console.WriteLine("Int Box: " + intBox.GetValue());

            Box<string> strBox = new Box<string>("Hello, Generics!");
            Console.WriteLine("String Box: " + strBox.GetValue());

            Box<double> dbBox = new Box<double>(45.67);
            Console.WriteLine("Double Box: " + dbBox.GetValue());

            int[] intArray = {1, 2, 3, 4, 5};
            double[] doubleArray = { 1.0, 2.0, 3.0 };
            string[] stringArray = { "Hello", "my", "friends!" };

            DisplayElements(intArray);
            DisplayElements(doubleArray);
            DisplayElements(stringArray);

            Console.ReadKey();
        }
    }
}
