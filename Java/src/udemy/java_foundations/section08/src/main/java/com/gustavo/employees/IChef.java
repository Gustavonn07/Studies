package com.gustavo.employees;

public interface IChef {
    default void cook(String food){
        System.out.println(food);
    }

    void yell();
}
