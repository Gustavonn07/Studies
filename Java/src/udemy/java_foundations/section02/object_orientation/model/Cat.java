package udemy.java_foundations.section02.object_orientation.model;

import java.time.LocalDate;

public class Cat extends Animal {

    public Cat(String name, LocalDate dateOfBirth) {
        super(name, dateOfBirth);
    }

    public void meow() {
        System.out.println("Meow");
    }
}

