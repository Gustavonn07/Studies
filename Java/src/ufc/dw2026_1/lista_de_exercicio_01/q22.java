package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Scanner;

public class q22 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Insira um número inteiro: ");
        int number = scanner.nextInt();

        //  Usando StringBuilder quebra caso seja colocado número negativo
        //  int invertedNumber = Integer.parseInt(
        //                new StringBuilder(String.valueOf(number))
        //                        .reverse()
        //                        .toString()
        //  );

        int invertedNumber = 0;

        while (number != 0) {
            int digit = number % 10;
            invertedNumber = invertedNumber * 10 + digit;
            number = number / 10;
        }

        System.out.println("Numero invertido: " + invertedNumber);
        scanner.close();
    }
}
