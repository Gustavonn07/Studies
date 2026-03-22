package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Arrays;
import java.util.Scanner;

public class q18 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = new int[10];

        for (int i = 0; i < numbers.length; ++i) {
            System.out.println("Insira o número " +  (i+1));
            numbers[i] = scanner.nextInt();
        }

        int[] reversedNumbers = new int[numbers.length];

        for (int i = 0; i < reversedNumbers.length; ++i) {
            reversedNumbers[i] = numbers[(numbers.length - 1) - i];
        }

        System.out.println(Arrays.toString(reversedNumbers));
        scanner.close();
    }
}
