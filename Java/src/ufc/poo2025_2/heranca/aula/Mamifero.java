package ufc.poo2025_2.heranca.aula;

public class Mamifero extends Animal {
    private int count;

    @Override
    public void comer() {
        if (count <= 3) {
            super.comer();
            return;
        }
        mamar();
        count++;
    }

    private void mamar() {}
}
