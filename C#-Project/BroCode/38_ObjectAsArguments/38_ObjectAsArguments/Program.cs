using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _38_ObjectAsArguments
{
    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }

        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }
        public void DisplayInfo()
        {
            Console.WriteLine($"Name: {Name}, Age: {Age}");
        }
    }
    public class Greeting
    {
        public void SayHello(Person person)
        {
            Console.WriteLine($"Hello, {person.Name}");
            person.DisplayInfo();
        }
    }
    public class Car
    {
        public string Model { get; set; }
        public string Color { get; set; }

        public Car(string model, String color)
        {
            Model = model;
            Color = color;
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person("Alice", 30);
            Greeting greeting = new Greeting();
            greeting.SayHello(person);

            Car car1 = new Car("Mustang", "Red");
            Car car2 = Copy(car1);

            ChangeColor(car1, "Silver");

            Console.WriteLine(car1.Color + " " + car1.Model); // Console.WriteLine($"{car1.Color} {car1.Model}");        
            Console.WriteLine(car2.Color + " " + car2.Model); // Console.WriteLine($"{car2.Color} {car2.Model}");

            Console.ReadKey();
        }
        public static void ChangeColor(Car car, String color)
        {
            car.Color = color;
        }
        public static Car Copy(Car car)
        {
            return new Car(car.Model, car.Color);
        }
    }
}
