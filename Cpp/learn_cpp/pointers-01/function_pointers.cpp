#include <iostream>

int sum(int a, int b)
{
    return a + b;
}

int main()
{
    int (*operation)(int, int) = &sum;

    int result = operation(10, 20);

    std::cout << result;
}