#include <stdio.h>

int main()
{
    /*
    Memory = an array of bytes within RAM (street)
    Memory block = a single unit (byte) within memory, used to hold some value (person)
    Memory address = the address of where a memory block is located (house address)
    */

    char a = 'X';
    char b = 'Y';
    char c = 'Z';

    printf("\n%d bytes", sizeof(a));
    printf("\n%d bytes", sizeof(b));
    printf("\n%d bytes", sizeof(c));

    printf("\n%p", &a);
    printf("\n%p", &b);
    printf("\n%p", &c);

   return 0;
}