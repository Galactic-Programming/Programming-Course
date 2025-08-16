#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    /*
    Pseudo random numbers = a set of values or elements that are statistically .
    (Don't use these for any sort of cryptographic  security).
    */

    srand(time(0));
    
    int number1 = (rand() % 6) + 1;
    int number2 = (rand() % 6) + 1;
    int number3 = (rand() % 6) + 1;

    printf("%d\n", number1);
    printf("%d\n", number2);
    printf("%d\n", number3);

    return 0;
}