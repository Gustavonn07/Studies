package udemy.java_foundations.section02.object_orientation;

import udemy.java_foundations.section02.object_orientation.model.Person;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        Person person01 = new Person("Jorge", "Luis", LocalDate.of(2003, 12, 7), null, null, null);
        System.out.println(person01);
    }
}
