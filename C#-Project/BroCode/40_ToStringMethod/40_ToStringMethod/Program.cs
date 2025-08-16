using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _40_ToStringMethod
{
    public class Car
    {
        string make;
        string model;
        int year;
        string color;

        public Car(string make, string model, int year, string color)
        {
            this.make = make;
            this.model = model;
            this.year = year;
            this.color = color;
        }
        public override string ToString()
        {
            return $"This is a {make} {model}";
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car("Chevy", "Corvette", 2024, "Blue");
            Console.WriteLine(car.ToString());

            Console.ReadKey();
        }
    }
}
