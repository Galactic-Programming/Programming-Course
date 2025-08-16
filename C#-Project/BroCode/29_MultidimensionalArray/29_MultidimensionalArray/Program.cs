using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _29_MultidimensionalArray
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] Appetizers = { "Vietnamese Spring Rolls", "Stuffed Mushrooms", "Caprese Skewers" };
            string[] Main = { "Pho", "Grilled Salmon", "Vegetarian Lasagna" };
            string[] Desserts = { "Mango Sticky Rice", "Chocolate Fondant", "Panna Cotta" };

            string[,] Menu = { { "Vietnamese Spring Rolls", "Stuffed Mushrooms", "Caprese Skewers" }, 
                               { "Pho", "Grilled Salmon", "Vegetarian Lasagna" },
                               { "Mango Sticky Rice", "Chocolate Fondant", "Panna Cotta" }
                             };

            Menu[0, 2] = "Banh Mi";
            Menu[2, 0] = "Pudding";

            /*foreach (string Dish in Menu)
            {
                Console.WriteLine(Dish);
            }*/

            for (int i = 0; i < Menu.GetLength(0); i++)
            {
                for (int j = 0; j < Menu.GetLength(1); j++)
                {
                    Console.Write(Menu[i, j] + " ");
                }
                Console.WriteLine();
            }

            Console.ReadKey();
        }
    }
}
