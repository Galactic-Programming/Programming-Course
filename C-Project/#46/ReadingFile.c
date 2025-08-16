#include <stdio.h>

int main()
{
    FILE *pFile = fopen("C:\\Users\\bosco\\Desktop\\Poem.txt", "r");

    char buffer[255];
    if (pFile == NULL)
    {
        printf("Error opening file");
    }
    else
    {
        while (fgets(buffer, 255, pFile) != NULL)
        {
            printf("%s", buffer);
        }
    }

    fclose(pFile);

    return 0;  // Exit with success
}