package ufc.dw2026_1.lista_de_exercicio_01;

import java.util.Scanner;

public class q23 {
    private final int num1;
    private final int num2;
    private final String operation;

    public q23(int num1, int num2, String operation) {
        this.num1 = num1;
        this.num2 = num2;
        this.operation = operation;
    }

    private int add() {
        return this.num1 + this.num2;
    }

    private int subtract() {
        return this.num1 - this.num2;
    }

    private int multiply() {
        return this.num1 * this.num2;
    }

    private int divide() {
        if (this.num2 == 0) {
            throw new ArithmeticException("Divisão por zero não é permitida");
        }
        return this.num1 / this.num2;
    }

    public int calc() {
        return switch (operation) {
            case "+" -> add();
            case "-" -> subtract();
            case "*" -> multiply();
            case "/" -> divide();
            default -> throw new IllegalArgumentException("Operação inválida");
        };
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o primeiro número: ");
        int n1 = scanner.nextInt();

        System.out.print("Digite o segundo número: ");
        int n2 = scanner.nextInt();

        System.out.print("Digite a operação (+, -, *, /): ");
        String op = scanner.next();

        q23 calculadora = new q23(n1, n2, op);

        try {
            int resultado = calculadora.calc();
            System.out.println("Resultado: " + resultado);
        } catch (Exception e) {
            System.out.println("Erro: " + e.getMessage());
        }

        scanner.close();
    }
}