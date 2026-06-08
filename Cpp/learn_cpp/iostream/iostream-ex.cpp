#include <iostream>

int main()
{
    std::cout << "Enter two numbers: " << std::endl;

    std::cout << "Number 01 and 02 (separate using space): ";
    int value01 {};
    int value02 {};
    std::cin >> value01 >> value02;

    std::cout
        << "Values digited: "
        << value01
        << ", "
        << value02
        << '\n'
        << "Final value: "
        << value01 + value02
        << std::endl;

    return 0;
}