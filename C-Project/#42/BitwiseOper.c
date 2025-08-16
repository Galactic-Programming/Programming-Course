#include <stdio.h>

int main()
{
    /*
    Bitwise operators = special operators used in bit level programming.
    (Knowing binary is important for this topic)

    & = And
    | = Or
    ^ = XOR
    << = left shift
    >> = right shift
    */

    int x = 6;  // number  6 = 0000 0110
    int y = 12; // number 12 = 0000 1100
    int z = 0;  // number  0 = 0000 0000

    z = x & y; // 0000 0100
    printf("\nx = %d, y = %d, And z = %d", x, y, z);

    z = x | y; // 0000 1110
    printf("\nx = %d, y = %d, Or z = %d", x, y, z);

    z = x ^ y; // 0000 1010
    printf("\nx = %d, y = %d, XOR z = %d", x, y, z);

    z = x << 2; // 0001 1000
    printf("\nx = %d, Left shift by 2 = %d", x, z);

    z = x >> 1; // 0000 0110
    printf("\nx = %d, Right shift by 1 = %d", x, z);

    return 0;
}