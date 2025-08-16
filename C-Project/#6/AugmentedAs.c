#include <stdio.h>

int main()
{
    /*
        Augmented assignment operators = used to replace a statement
        - where an operator takes a variable as one of its arguments
        - and the nassigns the result back to the same variable
        Exp: x = x + 1 or x += 1
    */
    int x = 10;
    int temp = x;

    // temp = temp + 2;
    // temp += 2;

    // temp = temp - 3;
    // temp -= 3;

    // temp = temp * 4;
    // temp *= 4;

    // temp = temp / 5;
    // temp /= 5;

    // temp = temp % 2;
    // temp %= 2;
    
    printf("%d", temp);

    return 0;
    
}