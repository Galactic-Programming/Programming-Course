#include <stdio.h>

void birthday(char name[], int age)
{
    printf("\nHappy birthday dear %s!", name);
    printf("\nYou are %d years old now!", age);
}

int main()
{
    char name[] = "Dante";
    int age = 29;

    birthday(name, age);

    return 0;
}