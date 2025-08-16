#include <stdio.h>
#include <string.h>

struct Player
{
    char name[12];
    int score;
};


int main()
{
    /*
    Struct = collection of related members ("Variables")
    They can be of different data types listed under one name in a block of memory
    Very similar to classes in other languages (but no methods).
    */

   struct Player player1;
   struct Player player2;

   strcpy(player1.name, "Dante");
   player1.score = 4;

   strcpy(player2.name, "Bosco");
   player2.score = 5;

   printf("%s\n", player1.name);
   printf("%d\n", player1.score);

   printf("%s\n", player2.name);
   printf("%d\n", player2.score);

   return 0;
}