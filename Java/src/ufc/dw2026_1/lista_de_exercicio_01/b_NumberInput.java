package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Scanner;

public class b_NumberInput {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Insira um número");

        double selectedNumber = scanner.nextDouble();
        System.out.println("O número informado foi: " +  selectedNumber);
    }
}
