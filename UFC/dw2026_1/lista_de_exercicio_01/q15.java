package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.ArrayList;

public class q15 {
    public static void main(String[] args) {
        ArrayList<Integer> fibonacci = new ArrayList<Integer>();

        fibonacci.add(0);
        fibonacci.add(1);

        for(int i = 2; i < 10; i++) {
            int last = fibonacci.get(i - 1);
            int secondLast = fibonacci.get(i - 2);
            fibonacci.add(last + secondLast);
        }

        for (int number : fibonacci) {
            System.out.print(number + " ");
        }
    }
}
