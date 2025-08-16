#include <stdio.h>

int main()
{
    // For loop = repeats a section of code a limited amount of times

    for(int index = 1; index <= 10; index = index + 1)
    {
        printf("%d\n", index);
    }

    for(int index = 10; index >= 1; index = index - 1)
    {
        printf("%d\n", index);
    }

    return 0;
}