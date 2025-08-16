using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _55_Class_Functions
{
    internal class Program
    {
        class Rectangle
        { 
            private double length;
            private double width;
            public Rectangle(double length, double width)
            {
                this.length = length;
                this.width = width;
            }
            public double Length
            {
                get { return length; }
                set { length = value; }
            }
            public double Width
            {
                get { return width; }
                set { width = value; }
            }
            public double GetArea()
            {
                return length * width;
            }
            public double GetPerimeter()
            {
                return 2 * (length + width);
            }
            public void Display()
            {
                Console.WriteLine("Length: " + length);
                Console.WriteLine("Width: " + width);
                Console.WriteLine("Area: " + GetArea());
                Console.WriteLine("Perimeter: " + GetPerimeter());
            }
        }
        static void Main(string[] args)
        {
            Rectangle rect = new Rectangle(10.5, 5.0);
            rect.Display();

            Console.ReadLine();
        }
    }
}
