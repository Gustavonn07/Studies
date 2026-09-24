#include <iostream>

int main()
{
  int array_2D [2][3] = {
    {
      1, 2, 3
    },
    {
      4, 5, 6
    }
  };

  int* pointer02 = &array_2D[0][2]; 

  std::cout << "array_2D    " << array_2D    << std::endl;
  std::cout << "array_2D[0] " << array_2D[0] << std::endl;
  std::cout << "array_2D[1] " << array_2D[1] << std::endl;

  std::cout << "" << std::endl;

  std::cout << "*array_2D    " << *array_2D    << std::endl;
  std::cout << "*array_2D[0] " << *array_2D[0] << std::endl;
  std::cout << "*array_2D[1] " << *array_2D[1] << std::endl;
  
  std::cout << "" << std::endl;
  
  std::cout << "array_2D[0][0] " << array_2D[0][0] << std::endl;
  std::cout << "array_2D[1][0] " << array_2D[1][0] << std::endl;

  std::cout << "" << std::endl;

  std::cout << "&array_2D[0][0] " << &array_2D[0][0] << std::endl;
  std::cout << "&array_2D[0][1] " << &array_2D[0][1] << std::endl;
  std::cout << "&array_2D[0][2] " << &array_2D[0][2] << std::endl;

  std::cout << "" << std::endl;
  
  std::cout << "pointer02  " << pointer02 << std::endl;
  std::cout << "*pointer02 " << *pointer02 << std::endl;
}