#include <stdio.h>
#include <stdbool.h>

int main()
{
    // Logical operators = || (Or) check if at least one condition is true

    float temp = 25;

    if (temp <= 0 || temp >= 30)
    {
        printf("\nThe weather is bad!");
    }
    // else if (temp >= 30)
    // {
    //     printf("\nThe weather is bad!");
    // }
    else
    {
        printf("\nThe weather is good!");
    }

    return 0;
}