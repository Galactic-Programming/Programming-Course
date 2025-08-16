#include <stdio.h>
#include <string.h>

int main()
{
    char name[25]; // Bytes
    int age;

    printf("What's your name?\n");
    // scanf("%s", &name);
    fgets(name, 25, stdin);
    name[strlen(name)-1] = '\0';

    printf("How old are you?\n");
    scanf("%d", &age);

    printf("Hello %s, how are you?\n", name);
    printf("You're %d years old!\n", age);

    return 0;
}