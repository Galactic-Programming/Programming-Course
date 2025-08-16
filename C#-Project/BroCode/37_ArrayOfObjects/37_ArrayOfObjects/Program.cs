using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _37_ArrayOfObjects
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Person[] people = new Person[3];

            // Person person1 = new Person("Alice", 30); Cách 1
            // people[0] = person1; 
            // people[0] = new Person("Alice", 30); Cách 2

            // Person person2 = new Person("Bob", 25);
            // people[1] = person2; 
            // people[1] = new Person("Bob", 25);

            // Person person3 = new Person("Charlie", 35);
            // people[2] = person3; 
            // people[2] = new Person("Charlie", 35);

            Person[] people = { new Person("Alice", 30), new Person("Bob", 25), new Person("Charlie", 35) };

            // Console.WriteLine(people[0].Name + " " + people[0].Age);
            // Console.WriteLine(people[1].Name + " " + people[1].Age);
            // Console.WriteLine(people[2].Name + " " + people[2].Age);

            foreach (Person person in people) { person.Display(); }

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
