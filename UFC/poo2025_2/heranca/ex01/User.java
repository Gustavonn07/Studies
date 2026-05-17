package ufc.poo2025_2.heranca.ex01;

public class User extends Person {
    public User(String cpf, int age, String name) {
        super(cpf, age, name);
    }

    public String getUserData() {
        return super.name + " " + super.getCpf();
    }
}
