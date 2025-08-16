#include <stdio.h>

int main()
{
    // While loop = checks a condition, then executes a block of code if condition is true.
    // Do while loop = always executes a block of code once, then checks a condition.

    int number = 0;
    int sum = 0;

    do
    {
        printf("\nEnter a # above 0: ");
        scanf("%d", &number);
        if (number > 0)
        {
            sum += number;
        }      
    }while (number > 0);
    
    printf("\nSum: %d", sum);

    return 0;
}