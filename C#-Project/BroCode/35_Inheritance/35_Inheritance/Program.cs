using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _35_Inheritance
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Inheritance = 1 or more children classes receiving fields, methods, etc... from a common parent.

            Dog dog = new Dog();
            dog.Name = "Buddy";
            dog.Eat();
            dog.Bark();

            Console.ReadKey();
        }
    }
    public class Animal
    {
        public string Name { get; set; }
        public void Eat()
        {
            Console.WriteLine($"{Name} is eating!");
        }
    }
    public class Dog : Animal
    {
        public void Bark()
        {
            Console.WriteLine($"{Name} is barking.");
        }
    }
}
