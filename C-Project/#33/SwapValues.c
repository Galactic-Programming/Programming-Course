#include <stdio.h>
#include <string.h>

int main()
{
    // int x = 1;
    // int y = 2;
    // int temp;

    // temp = x;
    // x = y;
    // y = temp;

    char x[] = "water";
    char y[] = "lemonade";
    char temp[15];

    strcpy(temp, x);
    strcpy(x, y);
    strcpy(y, temp);

    printf("X = %s\n", x);
    printf("Y = %s\n", y);

    return 0;
}