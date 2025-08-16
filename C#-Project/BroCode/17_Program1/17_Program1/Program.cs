using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _17_Program1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Random rand = new Random();

            bool playAgain = true;
            int min = 1;
            int max = 100;
            int answer;
            int number;
            int guesses;
            string response;

            while (playAgain)
            {
                answer = 0;
                guesses = 0;
                response = "";
                number = rand.Next(min, max + 1);

                while (answer != number)
                {
                    Console.Write($"\nGuess a number between {min} to {max} : ");
                    answer = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("Your choice: " + answer);

                    if (answer > number)
                    {
                        Console.WriteLine("Your answer is too high!\n");
                    }
                    else if (answer < number)
                    {
                        Console.WriteLine("Your answer is too low!\n");
                    }
                    else
                    {
                        Console.WriteLine("Your answer is correct\n");
                    }
                    guesses++;
                }
                Console.WriteLine("The number is: " + number);
                Console.WriteLine("You Won!");
                Console.WriteLine("Your guesses are: " + guesses);

                Console.Write("\nWould you like to play again? (Y/N): ");
                response = Console.ReadLine();
                response = response.ToUpper();

                if (response == "Y")
                {
                    playAgain = true;
                }
                else 
                {
                    playAgain = false;
                }
            }

            Console.WriteLine("Thanks for playing!");

            Console.ReadKey();
        }
    }
}
