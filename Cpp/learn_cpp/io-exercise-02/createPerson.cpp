
#include "./createPerson.h"
#include "./getValue.h"

#include <string>

Person createPerson() {

  std::string name = getStringValue();
  int age = getIntValue();

  return {
    name: name,
    age: age
  };
}
