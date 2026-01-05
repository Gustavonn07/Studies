package ufc.poo2025_2.abstract_class;

public abstract class Main {

    public abstract void metodo();

    public static void main(String[] args) {
        Main main = new Concrete();
        main.metodo();
    }
}
