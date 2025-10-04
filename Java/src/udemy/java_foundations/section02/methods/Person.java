package udemy.java_foundations.section02.methods;

public class Person {

    private String name;

    Person(String name) {
        this.name = name;
    }

    public char getInitialNameLetter() {
        return name.charAt(0);
    }

    public void sayHello() {
        System.out.println("Hello");
    }

    public void saySomething(String input) {
        System.out.println(input);
    }

    public void getChildrenNames(String[] names) {
        for(String name : names) {
            System.out.println(name);
        }
    }

    //  Varargs
    public void getChildrenMiddleNames(String... middleNames) {
        for(String name : middleNames) {
            System.out.println(name);
        }
    }

    public static void main(String[] args) {
        Person p1 = new Person("João");
        char initialNameLetter = p1.getInitialNameLetter();
        System.out.println(initialNameLetter);
        p1.sayHello();
        p1.saySomething("Batatinha quando nasce nasceu");
        p1.getChildrenNames(new String[] {"Felipe", "Jorge", "Batista"});
        p1.getChildrenMiddleNames("Fonseca", "Otavio", "Potavil");
    }
}
