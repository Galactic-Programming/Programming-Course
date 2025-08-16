using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _56_Class_Fields
{
    class Car
    {
        // Fields
        private string make;
        private string model;
        private int year;

        // Constructor
        public Car(string make, string model, int year)
        {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        // Properties để truy cập fields
        public string Make
        {
            get { return make; }
            set { make = value; }
        }

        public string Model
        {
            get { return model; }
            set { model = value; }
        }

        public int Year
        {
            get { return year; }
            set { year = value; }
        }

        // Method để hiển thị thông tin
        public void DisplayInfo()
        {
            Console.WriteLine($"Make: {make}, Model: {model}, Year: {year}");
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            // Tạo instance của lớp Car
            Car car1 = new Car("Toyota", "Camry", 2021);

            // Truy cập và thay đổi giá trị fields thông qua properties
            car1.DisplayInfo();
            car1.Make = "Honda";
            car1.Model = "Accord";
            car1.Year = 2022;
            car1.DisplayInfo();

            Console.ReadKey();
        }
    }
}