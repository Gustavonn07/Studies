#include <iostream>

void changeLetter(char newLetter, int position, char text[])
{
  text[position] = newLetter;
}

int main()
{
  char name[5] = "John";
  
  changeLetter('A', 1, name);

  std::cout << name;
}