using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _36_AbstractClasses
{
    /*internal class Program
    {
        static void Main(string[] args)
        {
            // Abstract Classes = Modifier that indicates missing components or incomplete implementation

            Car car = new Car();
            car.go();

            Bicycle bicycle = new Bicycle();
            bicycle.go();

            Motobike motobike = new Motobike();
            motobike.go();

            Console.ReadKey();
        }
    }
    public abstract class Vehicle
    {
        public int speed = 0;
        public void go()
        {
            Console.WriteLine("This vehicle is starting to move!");
        }
    }
    public class Car : Vehicle
    {
        public int wheels = 4;
        int maxSpeed = 500;
    }
    public class Bicycle : Vehicle
    {
        public int wheels = 2;
        int maxSpeed = 70;
    }
    public class Motobike : Vehicle
    {
        public int wheels = 2;
        int maxSpeed = 400;
    }*/

    // Lớp trừu tượng (Abstract Class)
    public abstract class Animal
    {
        // Phương thức trừu tượng (Abstract Method) không có thân phương thức
        public abstract void MakeSound();

        // Phương thức thông thường
        public void Sleep()
        {
            Console.WriteLine("Sleeping...");
        }
    }

    // Lớp con kế thừa từ lớp trừu tượng
    public class Dog : Animal
    {
        // Cài đặt phương thức trừu tượng
        public override void MakeSound()
        {
            Console.WriteLine("Woof! Woof!");
        }
    }

    // Chương trình chính
    public class Program
    {
        public static void Main(string[] args)
        {
            Dog myDog = new Dog();
            myDog.MakeSound();  // Gọi phương thức cài đặt từ lớp con
            myDog.Sleep();      // Gọi phương thức từ lớp cha

            Console.ReadKey();
        }
    }

}
