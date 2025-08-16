#include <stdio.h>
#include <string.h>

int main()
{
    char string1[] = "Dante";
    char string2[] = "Yann";

    // strlwr(string1); // Converts a string to lowercase
    // strupr(string2); // Converts a string to uppercase
    // strcat(string1, string2); // Appends string2 to end of string1
    // strncat(string1, string2, 1); // Appends n characters from string2 to end of string1
    // strcpy(string1, string2); // Copy string2 to string1
    // strncpy(string1, string2, 4); // copy n characters of string2 to string1

    // strset(string1, '?'); // Set all characters of a string to a given character
    // strnset(string1, 'x', 1); // Sets first n characters of string to a given character
    // strrev(string1); // Reverses a string

    // int result = strlen(string1); // Return string length as int
    int result = strcmp(string1, string2); // String compare all characters
    // int result = strncmp(string1, string2, 1) // String compare n characters
    // int result = strcmpi(string1, string1); // String compare all (ignore case)
    // int result = strnicmp(string1, string1, 1); // String compare n characters (ignore case)

    if (result == 0)
    {
        printf("These strings are the same!");
    }
    else
    {
        printf("These strings are not the same!");
    }
    
    return 0;
}