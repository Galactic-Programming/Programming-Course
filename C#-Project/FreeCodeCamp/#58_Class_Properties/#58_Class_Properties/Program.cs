using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _58_Class_Properties
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

        // Thuộc tính (property) để truy cập và cập nhật trường name
        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        // Thuộc tính (property) để truy cập và cập nhật trường age
        public int Age
        {
            get { return age; }
            set
            {
                if (value >= 0) // Kiểm tra giá trị hợp lệ
                {
                    age = value;
                }
                else
                {
                    throw new ArgumentException("Age must be a non-negative value.");
                }
            }
        }

        // Phương thức hiển thị thông tin
        public void DisplayInfo()
        {
            Console.WriteLine($"Name: {name}, Age: {age}");
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            // Tạo instance của lớp Person
            Person person1 = new Person("Alice", 30);

            // Truy cập và thay đổi giá trị thông qua thuộc tính
            person1.DisplayInfo();
            person1.Name = "Bob";
            person1.Age = 25;
            person1.DisplayInfo();

            // Thử gán giá trị không hợp lệ
            try
            {
                person1.Age = -5;
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
            Console.ReadLine();
        }
    }
}
