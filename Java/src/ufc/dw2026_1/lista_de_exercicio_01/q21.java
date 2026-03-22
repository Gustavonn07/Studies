package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Scanner;

public class q21 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Escreva algo:");
        String string1 = scanner.nextLine();

        System.out.println("Escreva algo novamente:");
        String string2 = scanner.nextLine();

        boolean hasSameContent = string1.contentEquals(string2);
        boolean hasSameSize = string1.length() == string2.length();

        System.out.println(
                "As strings " + (hasSameContent ? "" : "não ") + "possuem o mesmo conteúdo e " +
                (hasSameSize ? "" : "não ") + "possuem o mesmo tamanho!"
        );
        scanner.close();
    }
}
