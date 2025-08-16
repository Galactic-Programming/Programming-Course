#include <stdio.h>

int main()
{
    int age;

    printf("\nEnter your age: ");
    scanf("%d", &age);

    if (age >= 18)
    {
        printf("You're now signed up!");
    }
    else if (age == 0)
    {
        printf("You can't sign up! You were just born!");
    }
    
    else if (age < 0)
    {
        printf("You've not been born yet!");
    } 
    else
    {
        printf("You're too young to sign up!");
    }
    return 0;
}