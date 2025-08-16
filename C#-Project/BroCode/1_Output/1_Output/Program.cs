using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1_Output
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Hey! ");
            Console.WriteLine("Hello!");

            // This is a comment
            /* This is a multiline comment & Escape Sequence below
             
            \a Bell(alert)
            \b Backspace
            \f Form feed
            \n New line
            \r Carriage return
            \t Horizontal tab
            \v Vertical tab
            \'	Single quotation mark
            \"	Double quotation mark
            \\	Backslash
            \?	Literal question mark
            \ ooo ASCII character in octal notation
            \x hh   ASCII character in hexadecimal notation
            \x hhhh Unicode character in hexadecimal notation if this escape sequence is used in a wide-character constant or a Unicode string literal.

            For example, WCHAR f = L'\x4e00' or WCHAR b[] = L"The Chinese character for one is \x4e00"
            */

            Console.WriteLine("Dante");
            Console.ReadKey();
        }
    }
}
