package udemy.java_foundations.section03.exercises;

public class Person {
    private String firstName;
    private String lastName;
    private String address;

    public Person(String firstName, String lastName, String address) {
        this.firstName = firstName.trim().toUpperCase();
        this.lastName = lastName.trim().toUpperCase();
        this.address = address.trim();
    }

    public String dogTransformer(String phrase) {
        return phrase.replace("cat", "dog");
    }

    public String toLastCharUppercase(String text) {
        return text.trim().substring(0, text.length() - 1) + text.trim().substring(text.length() - 1).toUpperCase();
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName.trim().toUpperCase();
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName.trim().toUpperCase();
    }

    public String getAddress() {
        String[] separatedAddressUsingComma = address.split(",");

        String buildingNumber = separatedAddressUsingComma[0].split(" ")[0];
        String street = separatedAddressUsingComma[0].replace(buildingNumber, "").trim();
        String city = separatedAddressUsingComma[1].trim();
        String state = separatedAddressUsingComma[2].trim().split(" ")[0];
        String postalCode = separatedAddressUsingComma[2].trim().split(" ")[1];

        return  String.format("The building number: %s \nThe Street: %s \nCity: %s \nState: %s \nPostal Code: %s", buildingNumber, street, city, state, postalCode);
    }

    public void setAddress(String address) {
        this.address = address.trim();
    }

    public static void main(String[] args) {
        Person p1 = new Person("Gustavo   ", "Nogueira", "12345 Big St., Alphabet City, CA 90210");
        System.out.println(p1.dogTransformer("the cat is not a cat"));
        System.out.println(p1.getFirstName());
        System.out.println(p1.toLastCharUppercase("batata"));
        System.out.println(p1.getAddress());
    }
}
