using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _39_MethodOverRiding
{
    public class Animal
    {
        public virtual void MakeSound()
        {
            Console.WriteLine("The animal make a sound *Brrrr*");
        }
    }
    public class Dog : Animal
    {
        public override void MakeSound()
        {
            Console.WriteLine("The dog make a sound *woof woof...*");
        }
    }
    public class Cat : Animal
    {
        public override void MakeSound()
        {
            Console.WriteLine("The cat make a sound *meow meow...*");
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            // Method Over Riding = Provides a new version of method inherited from a parent class.
            //                      Inherited method must be: abstract, virtual, or already overriden.
            //                      Used with ToString(), polymorphism.

            Dog dog = new Dog();
            Cat cat = new Cat();

            dog.MakeSound();
            cat.MakeSound();

            Console.ReadKey();
        }

    }
}
