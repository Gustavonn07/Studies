package udemy.java_foundations.section04.exercises;

import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExercises {

    public static void getArk(String[] texts) {
        Pattern regex = Pattern.compile(".*ark$");
        if(Arrays.stream(texts).allMatch(text -> regex.matcher(text).matches())) {
            System.out.println("Todos são finalizados com 'ark'.");
        }
    }

    public static void getBraGra(String[] texts) {
        Pattern regex = Pattern.compile(".*(bra|gra)\\w*(bra|gra)$");
        if(Arrays.stream(texts).allMatch(text -> regex.matcher(text).matches())) {
            System.out.println("Todos possuem 'bra' ou 'gra' no meio e fim.");
        }
    }

    public static boolean isEmail(String email) {
        Pattern regex = Pattern.compile(".*@.*.com$");
        Matcher matcher = regex.matcher(email);
        return matcher.matches();
    }

    public static boolean isPhone(String phoneNumber) {
        Pattern regex = Pattern.compile("(?<DDD>\\(\\d{2}\\))9(?<phoneNumber>\\d{4}-\\d{4})");
        Matcher matcher = regex.matcher(phoneNumber);
        return matcher.matches();
    }

    public static void main(String[] args) {
        String[] arkArray = {"Dark", "bark", "Lark", "stark"};
        getArk(arkArray);
        String[] braGraArray = {"Abracadabra", "Agracadagra"};
        getBraGra(braGraArray);
        System.out.println(isEmail("gustavonepnog@gmail.com"));
        System.out.println(isEmail("gustavonepnog@gmail.dog"));
        System.out.println(isPhone("(85)99203-1231"));
    }
}
