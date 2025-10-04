package udemy.java_foundations.section02.arrays;

public class ArrayDemo {
    public static void main(String[] args) {
        System.out.println(args.length);

        // Objetos em java sâo classes
        int[] numbers = {1, 2, 3};

        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }
}
