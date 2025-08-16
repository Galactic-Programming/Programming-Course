using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _34_OverloadedConstructors
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // OverLoaded Constructors = Technique to create multiple constructors
            //                           with a different set of parameters.
            //                           Name + Parameters = Signature.

            Pizza pizza = new Pizza("Stuffed crust", "Olive oil", "Mozzarella", "Sausage");


            Console.ReadKey();
        }
    }
    internal class Pizza
    {
        private string bread;
        private string sauce;
        private string cheese;
        private string topping;

        /*public Pizza(string bread)
        {
            this.bread = bread;
        }
        public Pizza(string bread, string sauce)
        {
            this.bread = bread;
            this.sauce = sauce;
        }
        public Pizza(string bread, string sauce, string cheese)
        {
            this.bread = bread;
            this.sauce = sauce;
            this.cheese = cheese;
        }
        public Pizza(string bread, string sauce, string cheese, string topping)
        {
            this.bread = bread;
            this.sauce = sauce;
            this.cheese = cheese;
            this.topping = topping;
        }*/

        public Pizza(string bread, string sauce, string cheese, string topping)
        {
            this.bread = bread;
            this.sauce = sauce;
            this.cheese = cheese;
            this.topping = topping;
        }
        public Pizza(string bread, string sauce, string cheese) : this(bread, sauce, cheese, null) { }
        public Pizza(string bread, string sauce) : this(bread, sauce, null, null) { }
        public Pizza(string bread) : this(bread, null, null, null) { }
    }
}
