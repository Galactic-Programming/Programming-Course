using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3_ConvertToNumber
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string textAge  = "-23";
            int age         = Convert.ToInt32(textAge);
            Console.WriteLine(age);

            string textBigNumber = "9000000";
            long bigNumber       = Convert.ToInt64(textBigNumber);
            Console.WriteLine(bigNumber);

            string textNegative = "-55.2";
            double negative     = Convert.ToDouble(textNegative);
            Console.WriteLine(negative);

            string textPrecision = "5.00001";
            float precision      = Convert.ToSingle(textPrecision);
            Console.WriteLine(precision);

            string textMoney = "14.99";
            decimal money    = Convert.ToDecimal(textMoney);
            Console.WriteLine(money);

            Console.ReadKey();
        }
    }
}
