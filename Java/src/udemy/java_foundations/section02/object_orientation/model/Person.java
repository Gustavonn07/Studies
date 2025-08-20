package udemy.java_foundations.section02.object_orientation.model;

import java.time.LocalDate;
import java.util.Objects;

public class Person {
    private String firstName;
    private String lastName;
    private LocalDate dateOfBirth;
    private Address address;
    private Person fiancee;
    private Animal pet;

    public Person(String firstName, String lastName, LocalDate dateOfBirth, Address address, Person fiancee, Animal pet) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.fiancee = fiancee;
        this.pet = pet;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Person getFiancee() {
        return fiancee;
    }

    public void setFiancee(Person fiancee) {
        this.fiancee = fiancee;
    }

    public Animal getPet() {
        return pet;
    }

    public void setPet(Animal pet) {
        this.pet = pet;
    }

    @Override
    public String toString() {
        return "Person{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", address=" + address +
                ", fiancee=" + fiancee +
                ", pet=" + pet +
                '}';
    }
}
