using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _20_Verbatim_String_Literal
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string filePath = @"C:\Users\YourUsername\Documents\File.txt";
            string multiLineText = @"This is a multi-line text.";

            Console.WriteLine(filePath);
            Console.WriteLine(multiLineText);

            /*
             * \t : Tab
             * \n : New line
             * \" : 
             * \\ :
             * =\ :
            */

            string speech = "He said \"something\"";
            string path = "C:\\Users\\bosco\\source\\repos\\FreeCodeCamp\nNew Line Test";
            Console.WriteLine(path);
            Console.WriteLine(speech);

            path = @"C:\Users\bosco\source\repos\FreeCodeCamp" + "\nNew Line Test";
            Console.WriteLine(path);

            string name = @"Hello ""someone"" ";
            Console.WriteLine(name);

            name = "Hello 'someone'";
            Console.WriteLine(name);

            Console.ReadKey();
        }
    }
}
