package ufc.poo2025_2.heranca.ex01;

public class Person {
    private String cpf;
    public int age;
    protected String name;

    public Person(String cpf, int age, String name) {
        this.cpf = cpf;
        this.age = age;
        this.name = name;
    }

    public String getCpf() {
        return cpf;
    }
}
