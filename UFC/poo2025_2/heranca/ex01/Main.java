package ufc.poo2025_2.heranca.ex01;

public class Main {
    public static void main(String[] args) {
        User user = new User("032.233.234-54", 22, "Josué");
        System.out.println(user.getUserData());
        System.out.println(user.getCpf());
    }
}
