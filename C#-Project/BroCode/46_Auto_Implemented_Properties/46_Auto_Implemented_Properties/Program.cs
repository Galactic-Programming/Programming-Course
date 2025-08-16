using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _46_Auto_Implemented_Properties
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Auto-Implemented Properties = Shortcut when no additional logic is required in the properties
            //                               that you don't have to defined a field for a property,
            //                               you only have to write get; and/or set; inside the property.

            Person person = new Person("Alice", 30);
            person.Display();

            person.Name = "Bob";
            person.Age = 25;
            person.Display();


            Console.ReadKey();
        }
    }
    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }
        public void Display()
        {
            Console.WriteLine($"Name: {Name}, Age: {Age}");
        }
    }
}
