package udemy.java_foundations.section02.superclass;

public class Cat extends Animal {

    public Cat(String name, int age) {
        super(name, age);
    }

    @Override
    public String toString() {
        return super.toString();
    }

    public static void main(String[] args) {
        Cat cat1 = new Cat("Eduardo Mini", 21);
        cat1.setName("jorge");
        System.out.format("The cat name is: %s, %s age.", cat1.getName(), cat1.getAge());
    }
}
