using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace _53_Structures
{
    internal class Program
    {
        struct Point
        {
            //Epx1: public int X, Y;
            public int X;
            public int Y;
            public Point(int x, int y)
            {
                X = x;
                Y = y;
            }
            public void Display()
            {
                Console.WriteLine("X = {0}, Y = {1}", X, Y);
            }
        }
        struct Person
        {
            //Exp2:
            public string Name;
            public int Age;
            public int BirthMonth;
            public Person(string name, int age, int birthMonth)
            {
                Name = name;
                Age = age;
                BirthMonth = birthMonth;
            }
            public void Display()
            {
                Console.WriteLine("Name = {0}, Age = {1}, BirthMonth = {2}", Name, Age, BirthMonth);
            }
        }
        static void Main(string[] args)
        {
            //Exp1: Point p1 = new Point();
            Point p1 = new Point(10, 20);
            Console.WriteLine($"X: {p1.X}, Y: {p1.Y}");
            p1.Display();

            Point p2;
            p2.X = 100;
            p2.Y = 200;
            Console.WriteLine($"X: {p2.X}, Y: {p2.Y}");
            p2.Display();

            //Exp2: Person person = new Person();
            Person person = new Person();
            person.Name = "John";
            person.Age = 30;
            person.BirthMonth = 5;
            Console.WriteLine($"Name: {person.Name}, Age: {person.Age}, BirthMonth: {person.BirthMonth}");
            person.Display();

            //Exp3:
            string newName = "Alex";
            int newAge = 25;
            int birthMonth = 10;
            ReturnPerson(ref newName, ref newAge, ref birthMonth);
            Console.WriteLine($"Name: {newName}, Age: {newAge}, BirthMonth: {birthMonth}");

            Person persone = ReturnP();
            Console.WriteLine($"Name: {persone.Name}, Age: {persone.Age}, BirthMonth: {persone.BirthMonth}");

            Console.ReadKey();
        }
        static void ReturnPerson(ref string name, ref int age, ref int birthMonth)
        {
            //Exp3: 
            Console.Write("Enter your name: ");
            name = Console.ReadLine();

            Console.Write("Enter your age: ");
            age = int.Parse(Console.ReadLine());

            Console.Write("Enter your BirthMonth: ");
            birthMonth = int.Parse(Console.ReadLine());
        }
        static Person ReturnP()
        {
            Console.Write("Enter your name: ");
            string name = Console.ReadLine();

            Console.Write("Enter your age: ");
            int age = int.Parse(Console.ReadLine());

            Console.Write("Enter your BirthMonth: ");
            int birthMonth = int.Parse(Console.ReadLine());

            return new Person(name, age, birthMonth);
        }
    }
}
