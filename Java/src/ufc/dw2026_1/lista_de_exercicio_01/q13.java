package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Scanner;

public class q13 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int voterValue;

        int candidate1 = 0;
        int candidate2 = 0;
        int candidate3 = 0;

        System.out.println("Insira o número total de eleitores:");
        int selectedNumber = scanner.nextInt();

        for (int i = 0; i < selectedNumber; i++) {

            System.out.println("Eleitor " + (i+1) + " Insira o número do seu candidato (1, 2 ou 3): ");
            voterValue = scanner.nextInt();

            if (voterValue == 1) {
                candidate1++;
            }
            else if (voterValue == 2) {
                candidate2++;
            }
            else if (voterValue == 3) {
                candidate3++;
            }
            else {
                System.out.println("Voto inválido. Insira um número entre 1 e 3.");
                i--;
            }
        }

        System.out.println("\nResultado da eleição:");
        System.out.println("Candidato 1: " + candidate1 + " votos");
        System.out.println("Candidato 2: " + candidate2 + " votos");
        System.out.println("Candidato 3: " + candidate3 + " votos");

        scanner.close();
    }
}