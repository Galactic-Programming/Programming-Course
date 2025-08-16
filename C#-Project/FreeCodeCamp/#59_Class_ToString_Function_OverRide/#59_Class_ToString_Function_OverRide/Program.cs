using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _59_Class_ToString_Function_OverRide
{
    class Person
    {
        // Trường (field)
        private string name;
        private int age;

        // Constructor
        public Person(string name, int age)
        {
            this.name = name;
            this.age = age;
        }

        // Thuộc tính (property)
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

        // Ghi đè phương thức ToString()
        public override string ToString()
        {
            return $"Name: {name}, Age: {age}";
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            // Tạo instance của lớp Person
            Person person1 = new Person("Alice", 30);

            // In đối tượng sử dụng phương thức ToString() được ghi đè
            Console.WriteLine(person1.ToString());

            // In đối tượng trực tiếp (phương thức ToString() được tự động gọi)
            Console.WriteLine(person1);

            Console.ReadKey();
        }
    }
}

