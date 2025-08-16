using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace _49_MultiThreading
{
    internal class Program
    {
        public static void PrintNumbers()
        {
            for (int i = 1; i <= 5; i++)
            {
                Console.WriteLine($"Number: {i}");
                Thread.Sleep(1000);
            }
        }
        public static void PrintLetters()
        {
            for (char c = 'A'; c <= 'E';  c++)
            {
                Console.WriteLine($"Letter: {c}");
                Thread.Sleep(1500);
            }
        }
        public static void CountDown()
        {
            for (int i = 10; i >= 0; i--)
            {
                Console.WriteLine($"Timer #number1: {i} seconds");
                Thread.Sleep(1000);
            }
            Console.WriteLine("Timer #number1 completed!");
        }
        public static void CountUp()
        {
            for (int i = 0; i <= 10; i++)
            {
                Console.WriteLine($"Timer #number2: {i} seconds");
                Thread.Sleep(1000);
            }
            Console.WriteLine("Timer #number2 completed!");
        }
        static void Main(string[] args)
        {
            /*
             * Thread = An execution path of a program.
             *          We cna use multiple threads to perform different task
             *          of our programs at the same time.
             *          Current thread running is "main" thread
             *          using System.Threading;
            */

            //Thread thread1 = new Thread(new ThreadStart(PrintNumbers));
            //Thread thread2 = new Thread(new ThreadStart(PrintLetters));

            //thread1.Start();
            //thread2.Start();

            //thread1.Join();
            //thread2.Join();

            //Console.WriteLine("Main thread completed!");

            Thread mainThread = Thread.CurrentThread;
            mainThread.Name = "Main Thread!";

            Thread thread3 = new Thread(CountDown);
            Thread thread4 = new Thread(CountUp);

            thread3.Start();
            thread4.Start();

            thread3.Join();
            thread4.Join();

            Console.WriteLine($"{mainThread.Name} is completed!");

            Console.ReadKey();
        }
    }
}
