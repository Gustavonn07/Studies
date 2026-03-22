package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Scanner;

public class q12 {
    public static boolean isInsideParams(int initParam, int finalParam, int number) {
        return (initParam < number) && (number <= finalParam);
    }

    public static void main(String[] args) {
        int number = 0;
        Scanner scanner = new Scanner(System.in);
        while(!q12.isInsideParams(0, 10, number)) {
            System.out.println("Insira um número válido de 0 a 10: ");
            number = scanner.nextInt();
        }

        scanner.close();
    }
}
