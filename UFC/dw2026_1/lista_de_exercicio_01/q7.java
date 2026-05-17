package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.ArrayList;
import java.util.Scanner;

public class q7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayList<Double> grades = new ArrayList<Double>();
        boolean isFinished = false;
        while (!isFinished) {
            System.out.println("Insira a sua nota: ");
            grades.add(scanner.nextDouble());
            System.out.println("Todas as notas foram inseridas? (true / false)");
            isFinished = scanner.nextBoolean();
        }

        double sumOfGrades = 0;
        for (double grade : grades) {
            sumOfGrades += grade;
        }

        double finalGrade = sumOfGrades / grades.size();
        if (finalGrade < 7) {
            System.out.println(String.format("Sua média foi de %.2f, infelizmente você não passou!", finalGrade));
        } else {
            System.out.println(String.format("Sua média foi de %.2f, parabéns você passou!", finalGrade));
        }

        scanner.close();
    }
}
