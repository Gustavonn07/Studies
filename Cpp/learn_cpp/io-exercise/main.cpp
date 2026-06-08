#include "./getValue.h"
#include "./addValues.h"
#include <iostream>

int main() {
    int value01 { getValue() };
    int value02 { getValue() };

    addValues(value01, value02);
    return 0;
}