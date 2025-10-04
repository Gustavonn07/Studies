package udemy.java_foundations.section03;

public class TextMemory {

    public static void main(String[] args) {
        String fruit = "apple";
        String anotherFruit = "apple";
        String vegetable = new String("potato");
        String anotherVegetable = new String("potato");

        // Mesmo alocamento de memória
        System.out.println(fruit == anotherFruit);
        // Alocamento de memória diferentes
        System.out.println(vegetable == anotherVegetable);
    }
}
