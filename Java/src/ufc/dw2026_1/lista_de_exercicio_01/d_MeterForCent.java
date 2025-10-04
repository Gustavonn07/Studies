package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Scanner;

public class d_MeterForCent {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Insira em metros o valor que será convertido");

        float valueInMeter = scanner.nextFloat();
        System.out.println("O valor convertido para centímetos é de: " + (valueInMeter * 100));
    }
}
