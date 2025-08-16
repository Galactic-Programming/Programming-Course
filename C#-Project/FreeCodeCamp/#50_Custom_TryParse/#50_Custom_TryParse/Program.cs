using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _50_Custom_TryParse
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
        static bool CustomTryParse(string input, out int result)
        {
            result = 0;
            try
            {
                result = int.Parse(input);
                return true;
            }
            catch (FormatException ex)
            {
                // Xử lý ngoại lệ định dạng không hợp lệ
                Console.WriteLine("Error: Invalid input format.");
                return false;
            }
            catch (Exception ex)
            {
                // Xử lý ngoại lệ chung
                Console.WriteLine($"An unexpected error occurred: {ex.Message}");
                return false;
            }
            finally
            {
                // Khối mã này sẽ chạy dù có xảy ra ngoại lệ hay không
                Console.WriteLine("End of try-catch block.\n");
            }
        }
        static void Main(string[] args)
        {
            Console.Write("Enter a number: ");
            string input = Console.ReadLine();

            int result;

            bool isSuccess = CustomTryParse(input, out result);

            if (isSuccess)
            {
                Console.WriteLine($"Conversion succeeded. Result: {result}.");
            }
            else
            {
                Console.WriteLine("Conversion failed!");
            }

            Console.ReadKey();
        }
    }
}
