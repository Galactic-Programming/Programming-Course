#include <stdio.h>
#include <stdbool.h>

int main()
{
    // Logical operators = ! (Not) reverses the state of a condition

    bool sunny = true;

    if (!sunny)
    {
        printf("\nIt's sunny outside");
    }
    else
    {
        printf("\nIt's cloudy outside");
    }
    

    return 0;
}