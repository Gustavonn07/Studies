package ufc.dw2026_1.lista_de_exercicio_01;

public class e_CircleArea {
    public static double calculateCircleArea(double r) {
        return Math.PI * Math.pow(r, 2);
    }

    public static void main(String[] args) {
        System.out.println(calculateCircleArea(20));
    }
}
