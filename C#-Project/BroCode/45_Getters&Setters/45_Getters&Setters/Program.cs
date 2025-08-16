using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _45_Getters_Setters
{
    /*public class Person
    {
        private string name;
        public string Name
        {
            get { return name; }
            set
            {
                if (!string.IsNullOrEmpty(value))
                {
                    name = value;
                }
                else
                {
                    throw new ArgumentException("Name cannot be empty");
                }
            }
        }
        private int age;
        public int Age
        {
            get { return age; }
            set
            {
                if (value >= 0)
                {
                    age = value;
                }
                else
                {
                    throw new ArgumentException("Age cannot be nagative");
                }
            }
        }
        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }
        public void Display()
        {
            Console.WriteLine($"Name: {Name}, Age: {Age}");
        }
    }*/
    /*internal class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Person person = new Person("Alice", 30);
                person.Display();

                person.Name = "Bob";
                person.Age = 25;
                person.Display();

                person.Name = ""; // Sẽ ném ra lỗi ArgumentException
                person.Age = -5; // Sẽ ném ra lỗi ArgumentException
            }
            catch (ArgumentException e)
            {
                Console.WriteLine(e.Message);
            }

            Console.ReadKey();
        }
    }
*/
    internal class Program
    {
    static void Main(string[] args)
        {
            /* Getters & Setters = Add security to fields by encapsulation.
             *                     They're accessors found within properties.
             *                     
             * Properties = Combine aspects of both fields and methods (Share name with a field)
             * Get accessor = used to return the property value
             * Set accessor = used to assign a new value
             * Value Keyword = defines the value being assigned by the set (parameter)
            */

            Car car = new Car(400);
            car.Speed = 10000000;

            Console.WriteLine(car.Speed);

            Console.ReadKey();
        }
    }
    public class Car
    {
        private int speed;
        public int Speed
        {
            get { return speed; }
            set
            {
                if (value > 500)
                {
                    speed = 500;
                }
                else
                {
                    speed = value;
                }
            }
        }
        public Car(int speed)
        {
            this.speed = speed;
        }
    }
}