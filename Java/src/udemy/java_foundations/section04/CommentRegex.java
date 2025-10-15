package udemy.java_foundations.section04;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CommentRegex {
    public static void main(String[] args) {
        String regex = """
        (?<DDD>\\(\\d{2}\\)) # Recebe o DDD
        (\\d{4,5}) # Primeira sequencia de numeros
        [-\\s]
        (\\d{4}) # Segunda sequencia de numeros
        """;

        // Para comentar no segundo parâmetro de Pattern use COMMENTS para habilitar comentários com # dentro dos regex
        Pattern phoneNumberPattern = Pattern.compile(regex, Pattern.COMMENTS);
        String phoneNumber = "(85)99432-1242";

        Matcher matcher = phoneNumberPattern.matcher(phoneNumber);
        if (matcher.matches()) {
            System.out.println("Sim eles combinam");
        } else {
            System.out.println("Não eles não combinam");
        }
    }
}
