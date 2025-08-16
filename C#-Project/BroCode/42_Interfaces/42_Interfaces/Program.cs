using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _42_Interfaces
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Interfaces = Defines a "Contract" that all the classes inheriting form should follow
            //              An interfaces declares "What a class should have"
            //              An interfaces class defines "How it should do it"

            //              Benifit = Security + Multiple Inheritance + "Plug & Play"


            Rabbits rabbits = new Rabbits();
            rabbits.Flee();

            Hawk hawk = new Hawk();
            hawk.Hunt();

            Fish fish = new Fish();
            fish.Flee();
            fish.Hunt();

            Console.ReadKey();
        }
    }
    interface IPrey
    {
        void Flee();
    }
    interface IPredator
    {
        void Hunt();
    }
    public class Rabbits : IPrey
    {
        public void Flee()
        {
            Console.WriteLine("The rabbit runs away!");
        }
    }
    public class Hawk : IPredator
    {
        public void Hunt()
        {
            Console.WriteLine("The hawk is searching for food!");
        }
    }
    public class Fish : IPrey, IPredator
    {
        public void Flee()
        {
            Console.WriteLine("The fish swims away!");
        }
        public void Hunt()
        {
            Console.WriteLine("The fish is searching for smaller food!");
        }
    }
}
