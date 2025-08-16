using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _44_Out_Parameters
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Exp1:
            int sum = 0;
            int product = 0;

            Calculate(5, 3, out sum, out product);
            Console.WriteLine($"Sum: {sum}");
            Console.WriteLine($"Product: {product}");

            //Exp2:
            List<string> list = new List<string>
            {
                "Coffee", "Milk", "Tea", "Bread", "Sandwich"
            };
            //Console.WriteLine($"Index: {list.IndexOf("Tea")} ");
            //Console.WriteLine(FindInList("Milk", list, out int index);
            Console.Write("Enter an item to search: ");
            string item = Console.ReadLine();

            if (FindInList(item, list, out int index))
            {
                Console.WriteLine($"Found {item} at index {index}!");
            }
            else
            {
                Console.WriteLine("Not Found!");
            }

            List<Dictionary<string, string>> employees = new List<Dictionary<string, string>>();
            AddEmployee(employees, "Alice", "HR", 30);
            AddEmployee(employees, "Bob", "IT", 25);
            AddEmployee(employees, "Charlie", "Finance", 35);

            Display(employees, "Bob");
            RemoveEmployee(employees, "Alice");

            Console.WriteLine("\nEmployee list after removal:");
            foreach (var employee in employees)
            {
                Console.WriteLine($"Name: {employee["name"]}, Department: {employee["department"]}, Age: {employee["age"]}");
            }

            Console.ReadKey();
        }
        static void AddEmployee(List<Dictionary<string, string>> employees, string name, string department, int age)
        {
            Dictionary<string, string> newEmployee = new Dictionary<string, string>
            {
                { "name", name},
                { "department", department},
                { "age", age.ToString() }
            };
            employees.Add(newEmployee);
        }
        static void RemoveEmployee(List<Dictionary<string, string>> employees, string name)
        {
            Dictionary<string, string> employeeToRemove = employees.Find(e => e["name"] == name);
            if (employeeToRemove != null)
            {
                employees.Remove(employeeToRemove);
                Console.WriteLine($"\nEmployee {name} has been removed!");
            }
            else
            {
                Console.WriteLine($"\nEmployee {name} not found.");
            }
        }
        static void Display(List<Dictionary<string, string>> employees, string name)
        {
            Dictionary<string, string> employee = employees.Find(e => e["name"] == name);
            if (employee != null)
            {
                Console.WriteLine($"\nDetails of employee {name}: ");
                Console.WriteLine($"Name: {employee["name"]}, Department: {employee["department"]}, Age: {employee["age"]}");
            }
            else
            {
                Console.WriteLine($"\nEmployee {name} not found!");
            }
        }
        static bool FindInList(string s, List<string> list, out int index)
        {
            index = -1;
            for (int i = 0; i < list.Count; i++)
            {
                if (list[i].ToLower().Equals(s.ToLower()))
                {
                    index = i;
                }
            }
            return index > -1;
        }
        static void Calculate(int a, int b, out int sum, out int product)
        {
            sum = a + b;
            product = a * b;
        }
    }
}
