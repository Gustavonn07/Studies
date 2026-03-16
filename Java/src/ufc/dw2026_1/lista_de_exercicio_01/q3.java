package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Scanner;

public class q3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Insira 3 notas e receba a média");

        double n1 = scanner.nextDouble();
        double n2 = scanner.nextDouble();
        double n3 = scanner.nextDouble();
        System.out.println("A sua média é de: " + (n1 + n2 + n3) / 3);
    }
}
