package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Arrays;
import java.util.Scanner;

public class q9 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double[] numbers = new double[3];

        for(int i = 0; i < 3; i++) {
            System.out.printf("Insira o %d número: %n", i + 1);
            numbers[i] = scanner.nextDouble();
        }
        double max = Arrays.stream(numbers).max().getAsDouble();
        System.out.printf("O maior valor foi de: %.2f%n", max);

        scanner.close();
    }
}
