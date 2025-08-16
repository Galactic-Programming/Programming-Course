using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace _44_ListOfObjects
{
    /*public class Person
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
    }*/
    public class Player
    {
        public string username;
        public Player(string username)
        {
            this.username = username;
        }
        public override string ToString()
        {
            return username;
        }
    }
    internal class Program
    {
        /*static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.UTF8;

            List<Person> people = new List<Person>();

            people.Add(new Person("Alice", 30));
            people.Add(new Person("Bob", 25));
            people.Add(new Person("Charlie", 35));

            Console.WriteLine("Thông tin các đối tượng trong List:");

            foreach (Person person in people)
            {
                person.Display();
            }

            Person personToFind = people.Find(person => person.Name == "Bob");
            if (personToFind != null)
            {
                Console.WriteLine("\nTìm thấy đối tượng:");
                personToFind.Display();
            }
            else
            {
                Console.WriteLine("\nKhông tìm thấy đối tượng.");
            }

            people.Remove(personToFind);

            Console.WriteLine("\nThông tin các đối tượng trong List sau khi xóa:");
            foreach(Person person in people)
            {
                person.Display();
            }

            Console.ReadKey();
        }*/

        static void Main(string[] args)
        {
            List<Player> players = new List<Player>();

            //Player player1 = new Player("Alice");
            //Player player2 = new Player("Bob");
            //Player player3 = new Player("Charlie");

            //players.Add(player1);
            players.Add(new Player("Alice"));
            //players.Add(player2);
            players.Add(new Player("Bob"));
            //players.Add(player3);
            players.Add(new Player("Charlie"));

            foreach (Player player in players)
            {
                Console.WriteLine(player);
            }

            Console.ReadKey();
        }
    }
}
