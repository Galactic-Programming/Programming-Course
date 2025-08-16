#include <stdio.h>

void Hello(char[], int);

int main()
{
    // Function prototype: function declaration, w/o a body, before main().
    // To ensure that calls to a function are made with the correct arguments.

    /* Important Notes
        -Many C compilers do not check for parameter matching.
        -Missing arguments will result in unexpected behavior.
        -A function prototype causes the compiler to flag an error if arguments are missing
    */

    /* Advantages
        1. Easier to navigate a program w/o main() at the top
        2. Helps with debugging
        3. Commonly used in header files
    */

    char name[] = "Dante";
    int age = 29;

    Hello(name, age);

    return 0;
}

void Hello(char name[], int age)
{
    printf("\nHello %s", name);
    printf("\nYou are %d years old", age);
}