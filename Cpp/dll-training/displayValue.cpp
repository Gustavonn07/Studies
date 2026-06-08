#include <string>
#include "displayValue.h"

// g++ -shared -o <dll_file>.dll <cpp_file>.cpp

const char* displayValue(const char* value)
{
  if (!value) return "";
  std::string cpp_string(value);
 
  return value;
}