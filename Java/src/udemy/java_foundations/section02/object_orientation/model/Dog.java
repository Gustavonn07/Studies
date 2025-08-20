package udemy.java_foundations.section02.object_orientation.model;

import java.time.LocalDate;

public class Dog extends Animal {

    public Dog(String name, LocalDate dateOfBirth) {
        super(name, dateOfBirth);
    }

    public void bark() {
        System.out.println("Woof");
    }
}
