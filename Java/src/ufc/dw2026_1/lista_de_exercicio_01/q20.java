package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Arrays;
import java.util.Scanner;

public class q20 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int pairCount = 0, oddCount = 0;
        int[] numbers = new int[20];

        for (int i = 0; i < numbers.length; ++i) {
            System.out.println("Insira o número " +  (i+1));
            numbers[i] = scanner.nextInt();

            if(numbers[i] % 2 == 0) {
                ++pairCount;
            } else {
                ++oddCount;
            }
        }

        int[] pairNumbers = new int[pairCount];
        int[] oddNumbers = new int[oddCount];

        int pairIndex = 0;
        int oddIndex = 0;

        for (int number : numbers) {
            if (number % 2 == 0) {
                pairNumbers[pairIndex++] = number;
            } else {
                oddNumbers[oddIndex++] = number;
            }
        }

        System.out.println(Arrays.toString(numbers));
        System.out.println(Arrays.toString(pairNumbers));
        System.out.println(Arrays.toString(oddNumbers));
        scanner.close();
    }
}
