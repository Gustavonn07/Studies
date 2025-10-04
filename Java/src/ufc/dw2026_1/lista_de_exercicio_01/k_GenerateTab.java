package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Arrays;
import java.util.Scanner;

public class k_GenerateTab {

    private static int[] generateTab(int number) {
        int[] tab = new int[10];
        for(int i = 1; i <= 10; i++) {
            tab[i - 1] = i * number;
        }
        return tab;
    }

    public static int[] getTab(int number) {
        if(number < 0 || number > 10) {
            throw new IllegalArgumentException("Valor incoerente");
        }

        return generateTab(number);
    }

    public static void main(String[] args) {
        int number;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Selecione o número de 1 a 10 para gerar a tabuada: ");
        number = scanner.nextInt();
        System.out.println(Arrays.toString(k_GenerateTab.getTab(number)));
    }
}
