using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10_StringMethod
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string fullName = "Dante Yann";
            string phoneNumber = "123-456-7890";
            string userName = fullName.Insert(0, "Mr.");

            // fullName = fullName.ToUpper();
            // fullName = fullName.ToLower();
            // phoneNumber = phoneNumber.Replace("-", "");

            Console.WriteLine("Fullname: " + fullName);
            Console.WriteLine("Phone number: " + phoneNumber);
            Console.WriteLine("User name: " + userName);
            Console.WriteLine("Full name length: " + fullName.Length);

            string firstName = fullName.Substring(0, 5);
            string lastName = fullName.Substring(6, 4);

            Console.WriteLine("My first name is: " + firstName);
            Console.WriteLine("My last name is: " + lastName);

            Console.ReadKey();
        }
    }
}
