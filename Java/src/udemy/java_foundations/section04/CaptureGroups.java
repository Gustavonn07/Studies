package udemy.java_foundations.section04;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CaptureGroups {
    public static void main(String[] args) {
        // Criar um grupo de pattern com uma classe propria do java:
        // Podemos capturar grupos de regex colocando entre () / para usar realmente parênteses use \\(\\)
        // Para não capturar um grupo so precisa colocar (?: ... )
        // Serve para dividir o conteúdo em partes (DDD) (Numero)
        // Para nomear um grupo podemos por (?<nomeDoGp>)
        Pattern phoneNumberPattern = Pattern.compile("(?<DDD>\\(\\d{2}\\))(\\d{4,5})(?:[-\\s])(\\d{4})");
        String phoneNumber = "(85)99432-1242";

        // Para verificar formalmente se o pattern combina use o Matcher
        Matcher matcher = phoneNumberPattern.matcher(phoneNumber);
        if (matcher.matches()) {
            System.out.println("Sim eles combinam");
            System.out.println(matcher.group("DDD"));
            System.out.println(matcher.group(2));
        } else {
            System.out.println("Não eles não combinam");
        }
    }
}
