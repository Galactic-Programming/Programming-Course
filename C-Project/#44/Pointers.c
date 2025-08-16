#include <stdio.h>

void printAge(int *pAge)
{
    printf("Your age is %d years old.\n", *pAge);
}

int main()
{
    /*
    Pointer = a "variable-lie" reference that holds a memory address to another variable, array, etc.
    Some task are performed more efficiently and easily with pointers.
    * = indirection operator (value at address)
    */

    int age = 29;
    int *pAge = NULL; // good practice to assign null if declaring a pointer
    pAge = &age; // Assign address of age to pAge

    // printf("Address of age: %p\n", &age);
    // printf("Value of pAge: %p\n", pAge);

    // printf("Size of age: %d bytes\n", sizeof(age));
    // printf("Size of pAge: %d bytes\n", sizeof(pAge));

    // printf("Value of age: %d\n", age);
    // printf("Value of stored address: %d\n", *pAge);

    printAge(pAge); // Call function with value in pAge

    return 0;
}