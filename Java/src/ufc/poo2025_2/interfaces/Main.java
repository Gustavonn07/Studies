package ufc.poo2025_2.interfaces;

public class Main {
    public static void main(String[] args) {
        Thread t = new Thread() {
            public void run() {
                System.out.println("Estou na Thread...");
            }
        };
        t.start();
    }
}
