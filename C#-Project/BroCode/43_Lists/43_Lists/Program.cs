using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _43_Lists
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.UTF8;
            // List = Data structure that represents a list of objects that can be accessed by index.
            //        Similar to array, but can dynamically increase/decrease in size using:
            //        System.Collections.Generic;

            List<string> food = new List<string>();

            food.Add("Chicken");
            food.Add("Pizza");
            food.Add("Hamburger");
            food.Add("Hotdog");
            food.Add("Fries");

            //food.Remove("Fries");
            //food.Insert(0, "Salad");
            //food.Sort();
            //food.Reverse();
            //food.Clear();
            
            //Console.WriteLine(food.Count);
            //Console.WriteLine(food.IndexOf("Hotdog"));
            //Console.WriteLine(food.LastIndexOf("Hamburger"));

            foreach (string item in food)
            {
                Console.WriteLine(item);
            }

            // Tạo một List chứa các số nguyên
            List<int> numbers = new List<int>();

            // Thêm các phần tử vào List
            numbers.Add(1);
            numbers.Add(2);
            numbers.Add(3);
            numbers.Add(4);
            numbers.Add(5);

            // In các phần tử trong List
            Console.WriteLine("Các số trong List:");
            foreach (int number in numbers)
            {
                Console.WriteLine(number);
            }

            // Xóa một phần tử khỏi List
            numbers.Remove(3);

            // In lại các phần tử sau khi xóa
            Console.WriteLine("\nCác số trong List sau khi xóa phần tử 3:");
            foreach (int number in numbers)
            {
                Console.WriteLine(number);
            }

            // Kiểm tra xem List có chứa một phần tử cụ thể không
            bool containsTwo = numbers.Contains(2);
            Console.WriteLine("\nList có chứa số 2 không? " + containsTwo);

            // Sắp xếp các phần tử trong List
            numbers.Sort();

            // In lại các phần tử sau khi sắp xếp
            Console.WriteLine("\nCác số trong List sau khi sắp xếp:");
            foreach (int number in numbers)
            {
                Console.WriteLine(number);
            }

            Console.ReadKey();
        }
    }
}