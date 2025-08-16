#include <stdio.h>

struct Student
{
    char name[12];
    float GPA;
};

int main()
{
    struct Student student1 = {"Dante", 3.0};
    struct Student student2 = {"Bosco", 4.0};
    struct Student student3 = {"Kai", 2.5};
    struct Student student4 = {"Josh", 2.0};

    struct Student students[] = {student1, student2, student3, student4};

    for(int i = 0; i < sizeof(students) / sizeof(students[0]); i++)
    {
        printf("Name: %s and GPA: ", students[i].name);
        printf("%.2f\n", students[i].GPA);
    }
    return 0;
}