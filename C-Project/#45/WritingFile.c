#include <stdio.h>

int main()
{
    // FILE *pFile = fopen("test.txt", "a");

    // fprintf(pFile, "\nPatrick Star"); 

    // fclose(pFile);
    if (remove("test.txt") == 0)
    {
        printf("That file was removed successfully");
    }
    else
    {
        printf("Error: Unable to remove the file");
        printf("\nText file does not exist");
    }
    
    return 0;
}