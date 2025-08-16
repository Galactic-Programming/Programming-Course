using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _13_SwitchStatements
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Please enter a number from 1 to 7: ");
            int day = Convert.ToInt32(Console.ReadLine());

            switch(day)
            {
                case 1: Console.WriteLine("It's Monday");
                    break;
                case 2:
                    Console.WriteLine("It's Tuesday");
                    break;
                case 3:
                    Console.WriteLine("It's Wednesday");
                    break;
                case 4:
                    Console.WriteLine("It's Thursday");
                    break;
                case 5:
                    Console.WriteLine("It's Friday");
                    break;
                case 6:
                    Console.WriteLine("It's Saturday");
                    break;
                case 7:
                    Console.WriteLine("It's Sunday");
                    break;
                default:
                    Console.WriteLine("Invalid day, please enter a value between 1 and 7");
                    break;
            }
            Console.ReadKey();
        }
    }
}
