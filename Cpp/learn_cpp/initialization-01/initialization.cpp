#include <iostream>

void print(int value)
{
    std::cout << value << std::endl;
}

int main () 
{
    // MARK: - DEFAULT:
    int a;
    print(a);


    // MARK: - COPY
    int b = 5;
    print(b);


    // MARK: - DIRECT
    int c (6);
    print(c);


    // MARK: - DIRECT-LIST
    int d { 7 };
    print(d);


    // MARK: - VALUE
    [[maybe_unused]] int e {};
    int f {};
    print(f);
    return 0;
}
