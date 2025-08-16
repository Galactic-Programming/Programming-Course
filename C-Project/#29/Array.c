#include <stdio.h>

int main()
{
    // Array = a date structure that can store many values of the same data type.

    // double prices[] = {5.0, 10.0, 15.0, 20.0, 25.0};
    double prices[5];
    prices[0] = 5.0;

    printf("$%.2lf", prices[0]);

    return 0;
}