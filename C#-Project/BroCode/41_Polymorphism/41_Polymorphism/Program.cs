using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _41_Polymorphism
{
    public class Animal
    {
        public virtual void MakeSound()
        {
            Console.WriteLine("Animals makes a sound.");
        }
    }
    public class Dog : Animal
    {
        public override void MakeSound()
        {
            Console.WriteLine("Woof! Woof!");
        }
    }
    public class Cat : Animal
    {
        public override void MakeSound()
        {
            Console.WriteLine("Meow! Meow!");
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            // Polymorphimsm = Greek word that means to "have many forms".
            //                 Objects can be identified by more than one type.
            //                 Ex. A Dog is also: Canine, Animal, Organism.

            /*Animal[] animals = new Animal[3];
            animals[0] = new Animal();
            animals[1] = new Dog();
            animals[2] = new Cat();*/

            Dog dog = new Dog();
            Cat cat = new Cat();

            Animal[] animals = {dog, cat};

            foreach (Animal animal in animals)
            {
                animal.MakeSound();
            }

            Console.ReadKey();
        }
    }
}
