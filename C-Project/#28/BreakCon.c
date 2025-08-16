#include <stdio.h>

int main()
{
    // Continue = skips rest of code & forces the next iteration of the loop
    // Break = exits a loop/switch

    for (int i = 1; i <= 20; i++)
    {
        if (i == 13)
        {
            // continue;
            break;
        }
        printf("\n%d", i);
    }
    return 0;
}