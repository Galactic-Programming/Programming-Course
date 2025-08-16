using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _48_Exceptions_Handling
{
    internal class Program
    {
        static void CheckPositive(int number)
        {
            if (number < 0)
            {
                throw new ArgumentException("The number must be positive.");
            }
            else
            {
                Console.WriteLine("The number is positive");
            }
        }
        static void Main(string[] args)
        {
            bool looping = true;
            while (looping)
            {
                try
                {
                    // Yêu cầu người dùng nhập một số nguyên
                    Console.Write("Enter an integer: ");
                    int number = int.Parse(Console.ReadLine());
                    Console.WriteLine($"Your number is: {number}");

                    // Gọi hàm kiểm tra số âm
                    CheckPositive(number);

                    // Chia cho 0 để tạo ra ngoại lệ
                    int result = number / 0;
                    Console.WriteLine($"Result: {result}");
                }
                catch (ArgumentException ex)
                {
                    // Xử lý ngoại lệ
                    Console.WriteLine($"An error occurred: {ex.Message}");
                }
                catch (DivideByZeroException ex)
                {
                    // Xử lý ngoại lệ chia cho 0
                    Console.WriteLine("Error: Division by zero is not allowed.");
                    looping = false;
                }
                catch (FormatException ex)
                {
                    // Xử lý ngoại lệ định dạng không hợp lệ
                    Console.WriteLine("Error: Invalid input format.");
                }
                catch (Exception ex)
                {
                    // Xử lý ngoại lệ chung
                    Console.WriteLine($"An unexpected error occurred: {ex.Message}");
                }
                finally
                {
                    // Khối mã này sẽ chạy dù có xảy ra ngoại lệ hay không
                    Console.WriteLine("End of try-catch block.\n");
                }
            }
            Console.ReadKey();
        }
    }
}
