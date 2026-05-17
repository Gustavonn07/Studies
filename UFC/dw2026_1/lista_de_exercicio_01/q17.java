package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Arrays;
import java.util.Scanner;

public class q17 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = new int[5];

        for (int i = 0; i < 5; ++i) {
            System.out.println("Insira o número " +  (i+1));
            numbers[i] = scanner.nextInt();
        }

        System.out.println(Arrays.toString(numbers));
        scanner.close();
    }
}
