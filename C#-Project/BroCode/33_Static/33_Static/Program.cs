using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _33_Static
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Static = Modifier to declare a static member, which belong to the class itself -
            //          rather than to any specific object.

            Car car1 = new Car("Mustang");
            Car car2 = new Car("Corvette");
            Car car3 = new Car("Lambo");

            Console.WriteLine(car1);
            Console.WriteLine(car2);
            Console.WriteLine(car3);

            Console.WriteLine(Car.numberOfCars);
            Car.startRace();

            Console.ReadKey();
        }
    }
    internal class Car
    {
        string model;
        public static int numberOfCars;

        public Car(string model)
        {
            this.model = model;
            numberOfCars++;
        }
        public override string ToString()
        {
            return model;
        }
        public static void startRace()
        {
            Console.WriteLine("The race has begun!");
        }
    }
}
