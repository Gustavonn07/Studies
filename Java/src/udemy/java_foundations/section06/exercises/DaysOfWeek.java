package udemy.java_foundations.section06.exercises;

public class DaysOfWeek {
    public static void main(String[] args) {
        String[] daysOfWeek = {"Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"};
        for(String day : daysOfWeek) {
            System.out.println(day.toUpperCase());
        };
        System.out.println("---------------------------");
        short counter = 0;
        while (counter < 7){
            System.out.println(daysOfWeek[counter]);
            counter++;
        }
        System.out.println("---------------------------");
        counter = 0;
        do {
            System.out.println(daysOfWeek[counter]);
            counter++;
        } while (counter < 7);
    }
}
