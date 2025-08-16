using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _8_ConstantsKeyword
{
    internal class Program
    {
        static void Main(string[] args)
        {
            const int VAT = 20;
            Console.WriteLine(VAT);

            const int balance = 1000;
            Console.WriteLine(balance * (VAT / 100D));

            const double percentVAT = VAT / 100D;
            Console.WriteLine(balance * percentVAT);

            const string version = "V1.0";
            Console.WriteLine(version);

            Console.ReadKey();
        }
    }
}
