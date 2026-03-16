package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Scanner;

public class q14 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < 10; i++) {
            System.out.println((i + 1) + "/10 Envie um número maior que 1:");
            int number = scanner.nextInt();

            if (number <= 1) {
                System.out.println("Número precisa ser maior que 1");
                i--;
                continue;
            }

            boolean isPrime = true;

            for (int j = 2; j < number; j++) {
                if (number % j == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                System.out.println("É primo");
            } else {
                System.out.println("Não é primo");
            }
        }

        scanner.close();
    }
}