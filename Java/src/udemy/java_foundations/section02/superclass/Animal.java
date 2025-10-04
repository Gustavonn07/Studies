package udemy.java_foundations.section02.superclass;

import java.time.LocalDate;

public class Animal {
    private String name;
    private int age;
    LocalDate dob;

    public Animal(
            String name,
            int age
    ) {
        this.name = name;
        this.age = age;
        this.dob = LocalDate.now();
    }

    public String getName() {
        return name.substring(0, 1).toUpperCase() + name.substring(1);
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "Animal{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
