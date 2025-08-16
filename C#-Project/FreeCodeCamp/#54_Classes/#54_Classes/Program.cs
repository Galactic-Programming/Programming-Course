using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _54_Classes
{
    internal class Program
    {
        struct Point
        {
            public int X;
            public int Y;

            public Point(int x, int y)
            {
                this.X = x;
                this.Y = y;
            }
            public void Display ()
            {
                Console.WriteLine($"Point({X}, {Y})");
            }
        }
        class Person
        {
            private string name;
            private int age;
            public Person(string name, int age)
            {
                this.name = name;
                this.age = age;
            }
            public string Name
            {
                get { return name; }
                set { name = value; }
            }
            public int Age
            {
                get { return age; }
                set { age = value; }
            }
            public void DisplayInfo()
            {
                Console.WriteLine($"Name: {name}, Age: {age}");
            }
        }
        static void Main(string[] args)
        {
            Point p1 = new Point(10, 20);
            p1.Display();

            Point p2;
            p2.X = 30;
            p2.Y = 40;
            p2.Display();

            Person person1 = new Person("Tom", 23);
            person1.DisplayInfo();

            person1.Name = "Bob";
            person1.Age = 34;
            person1.DisplayInfo();

            Console.ReadKey();
        }
    }
}
