package udemy.java_foundations.section02.business;

public class Person {
    private String firstName;
    private int age;
    private long id;
    private char initialLetter = 'a';
    private byte myByte;
    private final String CONSTANT = "Constante";
    static private NewsAgency agency = new NewsAgency();

    public static void main(String[] args) {
        System.out.println(agency);
    }

    public void myTestMethod() {
        // Apenas variaveis locais
        var age = 21;
        var name = "Jake";
        String jerry = "Jerry";
    }
}
