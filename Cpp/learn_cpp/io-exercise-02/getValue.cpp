
#include "./getValue.h"
#include <string>
#include <iostream>

std::string getStringValue() {

  std::string input{};

  std::cin >> input;

  return input;
}

int getIntValue() {

  int input{};

  std::cin >> input;

  return input;
}
