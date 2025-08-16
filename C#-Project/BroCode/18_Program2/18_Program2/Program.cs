using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _18_Program2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Random random = new Random();
            bool playAgain = true;
            string player;
            string computer;
            string answer;

            while (playAgain)
            {
                player = "";
                computer = "";
                answer = "";

                Console.Write("\nPlease select Rock, Paper or Scissor: ");
                player = Console.ReadLine();
                player = char.ToUpper(player[0]) + player.Substring(1).ToLower();
                Console.WriteLine("\nYour choice is: " + player);

                while (player != "Rock" && player != "Paper" && player != "Scissor")
                {
                    Console.WriteLine("Ivalid choice!");
                    Console.Write("\nPlease select Rock, Paper or Scissor: ");
                    player = Console.ReadLine();
                    player = char.ToUpper(player[0]) + player.Substring(1).ToLower();
                    Console.WriteLine("\nYour choice is: " + player);
                }

                switch (random.Next(1, 4))
                {
                    case 1: computer = "Rock"; break;
                    case 2: computer = "Paper"; break;
                    case 3: computer = "Scissor"; break;
                }
                Console.WriteLine("Computer choise is: " + computer);

                switch (player)
                {
                    case "Rock":
                        if (computer == "Rock")
                        {
                            Console.WriteLine("It's a tie!\n");
                        }
                        else if (computer == "Paper")
                        {
                            Console.WriteLine("You lose!\n");
                        }
                        else
                        {
                            Console.WriteLine("You win!\n");
                        }
                        break;
                    case "Paper":
                        if (computer == "Paper")
                        {
                            Console.WriteLine("It's a tie!\n");
                        }
                        else if (computer == "Scissor")
                        {
                            Console.WriteLine("You lose!\n");
                        }
                        else
                        {
                            Console.WriteLine("You win!\n");
                        }
                        break;
                    case "Scissor":
                        if (computer == "Scissor")
                        {
                            Console.WriteLine("It's a tie!\n");
                        }
                        else if (computer == "Rock")
                        {
                            Console.WriteLine("You lose!\n");
                        }
                        else
                        {
                            Console.WriteLine("You win!\n");
                        }
                        break;
                }

                Console.Write("Would you like to play again? (Yes/No): ");
                answer = Console.ReadLine();
                answer = char.ToUpper(answer[0]) + answer.Substring(1).ToLower();

                if (answer == "Yes")
                {
                    playAgain = true;
                }
                else
                {
                    playAgain = false;
                }
            }

            Console.WriteLine("Thanks for playing.....");

            Console.ReadKey();
        }
    }
}
