#include <iostream>

int SumOfElements(int IntegerArray[], int size)
{
  int i, sum = 0;
  for(i = 0; i < size; i++) {
    sum += IntegerArray[i];
  }

  return sum;
}

int main() 
{
  int IntegerArray[] = {1, 2, 3, 4, 5};
  // Não pode ser calculado na function porconta a forma de como arrays são passadas internamentes
  int size = sizeof(IntegerArray) / sizeof(IntegerArray[0]);
  int total = SumOfElements(IntegerArray, size);
  
  std::cout << total << std::endl;
}