#include <stdio.h>

int main()
{
    // Switch = A more efficient alternatvie to using many "else if" statements
    //          And allow a value to be tested for equality against many cases
    char grade;

    printf("\nEnter a letter grade: ");
    scanf("%c", &grade);

    // if (grade == 'A')
    // {
    //     printf("Perfect!\n");
    // }
    // else if (grade == 'B')
    // {
    //     printf("You did well!\n");
    // }
    // else if (grade == 'C')
    // {
    //     printf("You did fine!\n");
    // }
    // else if (grade == 'D')
    // {
    //     printf("At least it's not an F\n");
    // }
    // else if (grade == 'F')
    // {
    //     printf("You failed!!!\n");
    // }
    // else
    // {
    //     printf("That's not a valid grade!\n");
    // }
    switch (grade)
    {
    case 'A':
        printf("Perfect!\n");
        break;
    case 'B':
        printf("You did well!\n");
        break;
    case 'C':
        printf("You did fine!\n");
        break;
    case 'D':
        printf("At least it's not an F\n");
        break;
    case 'F':
        printf("You failed!!!\n");
        break;
    default:
        printf("Please enter a valid grade!\n");
        break;
    }
    return 0;
}