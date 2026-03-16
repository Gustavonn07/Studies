package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Scanner;

public class q16 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int factorial = 1;

        System.out.println("Indique um número positivo para retornar o fatorial do mesmo:");
        int number = scanner.nextInt();

        if(number < 0) {
            System.out.println("O número deve ser positivo.");
        } else {
            for (int i = number; i > 0; i--) {
                factorial *= i;
            }

            System.out.println("Resultado: " + factorial);
        }
    }
}
