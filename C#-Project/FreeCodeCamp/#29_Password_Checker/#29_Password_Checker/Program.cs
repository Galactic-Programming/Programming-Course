using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _29_Password_Checker
{
    internal class Program
    {
        static string PromptForPassword(string message)
        {
            string password;
            do
            {
                Console.Write(message);
                password = Console.ReadLine();
                if (password.Equals(string.Empty))
                {
                    Console.WriteLine("You cannot leave the password empty!");
                }
            }
            while (password.Equals(string.Empty));
            return password;
        }
        static void Main(string[] args)
        {
            /*string password1, password2;
            bool check = true;

            while (check)
            {
                Console.Write("Please enter your password: ");
                password1 = Console.ReadLine();

                while (password1.Equals(string.Empty))
                {
                    Console.WriteLine("You can not leave the password empty!");
                    Console.Write("Please enter your password: ");
                    password1 = Console.ReadLine();
                }

                Console.Write("Please re-enter your password: ");
                password2 = Console.ReadLine();

                while (password2.Equals(string.Empty))
                {
                    Console.WriteLine("You can not leave the password empty!");
                    Console.Write("Please enter your password: ");
                    password2 = Console.ReadLine();
                }

                if (password1.Equals(password2))
                {
                    Console.WriteLine("Password macth!");
                    check = false;
                }
                else
                {
                    Console.WriteLine("Password doesn't match!");
                }
            }*/

            string password1, password2;

            do
            {
                password1 = PromptForPassword("Please enter your password: ");
                password2 = PromptForPassword("Please re-enter your password: ");

                if (password1.Equals(password2))
                {
                    Console.WriteLine("Password match!");
                    break;
                }
                else
                {
                    Console.WriteLine("Password don't match!");
                }
            } while (true);

            Console.ReadKey();
        }
    }
}
