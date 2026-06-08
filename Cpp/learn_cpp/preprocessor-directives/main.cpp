#include <iostream>

#define POTATO

int main() {

#ifdef POTATO
    std::cout << "POTATO IS DEFINED" << std::endl;
#endif

#ifndef POTATO
    std::cout << "POTATO IS NOT DEFINED" << std::endl;
#endif

    return 0;
}