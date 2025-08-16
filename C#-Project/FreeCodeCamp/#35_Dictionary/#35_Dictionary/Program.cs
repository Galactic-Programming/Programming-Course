using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _35_Dictionary
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Khai báo và khởi tạo một Dictionary với khóa là chuỗi và giá trị là số nguyên
            Dictionary<string, int> ageDictionary = new Dictionary<string, int>();

            // Thêm các phần tử vào Dictionary
            ageDictionary.Add("Alice", 30);
            ageDictionary.Add("Bob", 25);
            ageDictionary.Add("Charlie", 35);

            // Truy cập và in ra các giá trị trong Dictionary
            Console.WriteLine("Age of Alice: " + ageDictionary["Alice"]);
            Console.WriteLine("Age of Bob: " + ageDictionary["Bob"]);
            Console.WriteLine("Age of Charlie: " + ageDictionary["Charlie"]);

            // Kiểm tra sự tồn tại của một khóa
            if (ageDictionary.ContainsKey("David"))
            {
                Console.WriteLine("Age of David: " + ageDictionary["David"]);
            }
            else
            {
                Console.WriteLine("David is not in the dictionary.");
            }

            // Xóa một phần tử khỏi Dictionary
            ageDictionary.Remove("Bob");

            // In ra các phần tử còn lại sau khi xóa
            Console.WriteLine("\nDictionary after removing Bob:");
            foreach (var kvp in ageDictionary)
            {
                Console.WriteLine("Name: " + kvp.Key + ", Age: " + kvp.Value);
            }
        }

    }
}

