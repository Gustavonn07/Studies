package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Scanner;

public class h_FinalMedia {

    private static double calcularMedia(double n1, double n2) {
        return (n1 + n2) / 2.0;
    }

    private static double calcularNotaFinalNecessaria(double media) {
        double needed = 10 - media;
        return Math.max(needed, 4);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Insira sua 1ª nota: ");
        double grade1 = scanner.nextDouble();

        System.out.print("Insira sua 2ª nota: ");
        double grade2 = scanner.nextDouble();

        double average = calcularMedia(grade1, grade2);

        if (average >= 7) {
            System.out.println("Parabéns, você foi aprovado!");
        } else if (average >= 4) {
            double needed = calcularNotaFinalNecessaria(average);
            System.out.printf(
                    "Você fará a avaliação final. Será necessário tirar no mínimo %.2f para ser aprovado.%n",
                    needed
            );
        } else {
            System.out.println("Infelizmente você foi reprovado!");
        }

        scanner.close();
    }
}
