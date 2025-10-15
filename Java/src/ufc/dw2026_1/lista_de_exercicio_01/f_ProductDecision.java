package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Scanner;

public class f_ProductDecision {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Insira o valor do produto 01: ");
        double product01 = scanner.nextDouble();

        System.out.println("Insira o valor do produto 02: ");
        double product02 = scanner.nextDouble();

        System.out.println("Insira o valor do produto 03: ");
        double product03 = scanner.nextDouble();

        double selectedProduct = product01;

        if(selectedProduct > product02) selectedProduct = product02;
        if(selectedProduct > product03) selectedProduct = product03;

        System.out.println(String.format("O melhor produto deve ser o de valor %.2f", selectedProduct));

        scanner.close();
    }
}
