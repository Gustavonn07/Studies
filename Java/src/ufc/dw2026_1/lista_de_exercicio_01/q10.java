package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Scanner;

public class q10 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Insira um valor inteiro: ");
        int value = scanner.nextInt();

        System.out.printf("O valor digitado é %s%n", (value % 2 == 0 ? "par" : "impar"));

        scanner.close();
    }
}
