#include <iostream>

int main() 
{
  int array[5] = {20, 22, 24, 26, 28};

  int* pointer = &array[0];

  std::cout << "address pointer:  " <<   pointer << std::endl;
  std::cout << "address array[0]: " << &array[0] << std::endl;
  std::cout << "address array[1]: " << &array[1] << std::endl;
  std::cout << "address array[2]: " << &array[2] << std::endl;
  std::cout << "address array[3]: " << &array[3] << std::endl;
  std::cout << "address array[4]: " << &array[4] << std::endl;
} 