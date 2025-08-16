#include <stdio.h>

// typedef char user[25];

typedef struct
{
    char name[25];
    int id;
    char password[12];
} User;


int main()
{
    // Typedef = reserved ketword that gives an existing datatype a "Nickname".

    User user1 = {"Dante", 856321, "password123"};
    User user2 = {"Bosco", 211980, "password321"};

    printf("%s\n", user1.name);
    printf("%d\n", user1.id);
    printf("%s\n", user1.password);
    printf("\n");
    printf("%s\n", user2.name);
    printf("%d\n", user2.id);
    printf("%s\n", user2.password);

    return 0;
}