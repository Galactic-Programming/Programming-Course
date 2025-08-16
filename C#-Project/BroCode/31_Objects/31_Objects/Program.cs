using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _31_Objects
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Object = An instance of class
            //          A class can be used as a blueprint to create objects (OOP).
            //          Objects can have fields & methods (characteristics & actions).

            Human human1 = new Human();
            Human human2 = new Human();

            human1.name = "Rick"; human2.name = "Morty";
            human1.age = 65; human2.age = 16;

            human1.Eat(); human2.Eat();
            human1.Sleep(); human2.Sleep();

            Console.ReadKey();
        }
    }
    internal class Human
    {
        public string name;
        public int age;

        public void Eat()
        {
            Console.WriteLine(name + " is eating.");
        }
        public void Sleep()
        {
            Console.WriteLine(name + " is sleeping.");
        }
    }
}
