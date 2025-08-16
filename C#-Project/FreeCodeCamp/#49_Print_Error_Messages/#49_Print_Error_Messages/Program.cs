using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _49_Print_Error_Messages
{
    internal class Program
    {
        static void Main(string[] args)
        {
            try
            {
                // Gọi hàm kiểm tra số âm
                CheckPositive(-5);
            }
            catch (ArgumentException ex)
            {
                // Xử lý ngoại lệ
                Console.WriteLine($"An error occurred: {ex.Message}");
            }
        }

        // Hàm kiểm tra số dương, ném ngoại lệ nếu là số âm
        static void CheckPositive(int number)
        {
            if (number < 0)
            {
                // Ném ngoại lệ ArgumentException với thông báo lỗi
                throw new ArgumentException("The number must be positive.");
            }
            else
            {
                Console.WriteLine("The number is positive.");
            }
        }
    }

}

