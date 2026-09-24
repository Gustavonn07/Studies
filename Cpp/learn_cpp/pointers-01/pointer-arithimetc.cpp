#include <iostream>

int main()
{
  int numbers[5] = {2, 4, 6, 8, 10};

  int* number = &numbers[1];

  std::cout << &numbers[1] << std::endl;
  std::cout << number << std::endl;

  std::cout << (number + 1) << std::endl;
  std::cout << &numbers[2] << std::endl;

  std::cout << (number + 10) << std::endl;
  std::cout << *(number + 10) << std::endl;
}