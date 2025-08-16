using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _47_Enums
{
    public enum DaysOfWeek
    {
        Sunday,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday
    }
    public enum Planets
    {
        Mercury = 1,
        Venus = 2,
        Earth = 3,
        Mars = 4,
        Jupiter = 5,
        Saturn = 6,
        Uranus = 7,
        Neptune = 8,
        Pluto = 9
    }
    public enum PlanetRadius
    {
        Mercury = 2439,
        Venus = 6051,
        Earth = 6371,
        Mars = 3389,
        Jupiter = 69911,
        Saturn = 58232,
        Uranus = 25362,
        Neptune = 24622,
        Pluto = 1188
    }
    internal class Program
    {
        public static double Volume(PlanetRadius radius)
        {
            double volume = (4.0 / 3.0) * Math.PI * Math.Pow((int)radius, 3);
            return volume;
        }
        static void Main(string[] args)
        {
            // Enums = Special "Class" that containsa a set of named integer constants.
            //         Use enums when you have values that you know will not change,
            //         to get the integer value from an item, you must explicity convert to an int

            //         name = integer

            DaysOfWeek today = DaysOfWeek.Sunday;

            if (today == DaysOfWeek.Sunday || today == DaysOfWeek.Saturday)
            {
                Console.WriteLine("It's weekend!");
            }
            Console.WriteLine();
            foreach (DaysOfWeek day in Enum.GetValues(typeof(DaysOfWeek)))
            {
                Console.WriteLine(day);
            }

            Console.WriteLine($"\n{Planets.Pluto} is a planet #number {(int)Planets.Pluto}");

            string name = PlanetRadius.Earth.ToString();
            int radius = (int)PlanetRadius.Earth;
            double volume = Volume(PlanetRadius.Earth);

            Console.WriteLine($"Planet: {name}");
            Console.WriteLine($"Planet radius: {radius} Km");
            Console.WriteLine($"Volume: {volume}");

            Console.ReadKey();
        }
    }
}
