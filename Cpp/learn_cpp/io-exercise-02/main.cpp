
#include "./createPerson.h"
#include <iostream>

int main() {

  Person person01 { createPerson() };

  std::cout << "Nome: " << person01.name << '\n' << "Idade: " << person01.age << std::endl;

  return 0;
}
