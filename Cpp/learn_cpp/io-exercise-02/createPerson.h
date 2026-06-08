#ifndef CREATE_PERSON_H
#define CREATE_PERSON_H

#include <string>

struct Person {
  std::string name;
  int age;
};

Person createPerson();

#endif

