#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    const int Min = 1;
    const int Max = 100;
    int guess;
    int guesses = 00;
    int answer;

    // Use the current time as a seed
    srand(time(0));
    // Generate a random number between Min & Max
    answer = (rand() % Max) + Min;

    do
    {
        printf("Enter a guess: ");
        scanf("%d", &guess);
        if (guess > answer)
        {
            printf("Too high!\n");
        }
        else if (guess < answer)
        {
            printf("Too low!\n");
        }
        else
        {
            printf("Your guess is correct, Congratulation!");
        }
        guesses++;
    } while (guess != answer);
    
    printf("The answer: %d\n", answer);
    printf("Your guesses: %d\n", guesses);

    return 0;
}