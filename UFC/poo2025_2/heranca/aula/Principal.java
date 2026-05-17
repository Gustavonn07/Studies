package ufc.poo2025_2.heranca.aula;

public class Principal {

    @Override
    public String toString() {
        return "";
    }

    public static void main(String[] args) {
        Animal animal = new Mamifero();

        animal.comer();
    }
}
