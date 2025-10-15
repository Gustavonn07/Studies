package random;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExercises01 {

    public static boolean isEmail(String email) {
        Pattern regex = Pattern.compile("(?<usuario>^[\\w_.]+)@(?<dominio>\\w{2,6}).com$");
        Matcher matcher = regex.matcher(email);
        return matcher.matches();
    }

    public static boolean isValidDate(String date) {
        Pattern regex = Pattern.compile("^(0[1-9]|1[0-9]|2[0-9]|3[0-1])/(0[1-9]|1[0-2])/\\d{4}$");
        Matcher matcher = regex.matcher(date);
        return matcher.matches();
    }

    public static boolean isValidPassword(String password) {
        // ?= eh de lookahead (vê se tem pelo menos um)
        // {n,} eh para definir um min e max ilimitado
        Pattern regex = Pattern.compile("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[(!@#$%^&*)]).{8,}$");
        Matcher matcher = regex.matcher(password);
        return matcher.matches();
    }

    public static void main(String[] args) {
        // 1. Validação de e-mail
        // Crie uma expressão regular que valide endereços de e-mail no formato padrão: usuario@dominio.com
        // - O usuário pode ter letras, números, pontos e underscores
        // - A extensão deve ter de 2 a 6 letras
        // String emailRegex = "SEU_REGEX_AQUI";
        // String emailExample = "exemplo.usuario@dominio.com";

        System.out.println(isEmail("gustavo23_.batata@gmail.com"));

        // 2. Data no formato DD/MM/AAAA
        // Crie uma regex que valide datas no formato DD/MM/AAAA, garantindo que:
        // - Dia vá de 01 a 31
        // - Mês vá de 01 a 12
        // - Ano tenha exatamente 4 dígitos
        // String dateRegex = "SEU_REGEX_AQUI";
        // String dateExample = "25/12/2025";

        System.out.println(isValidDate("25/12/2025"));
        System.out.println(isValidDate("32/22/2025"));

        // 3. Senhas fortes
        // Crie uma regex para validar senhas que:
        // - Tenham no mínimo 8 caracteres
        // - Pelo menos uma letra maiúscula
        // - Pelo menos uma letra minúscula
        // - Pelo menos um número
        // - Pelo menos um caractere especial (!@#$%^&*)
        // String passwordRegex = "SEU_REGEX_AQUI";
        // String passwordExample = "Senha@123";

        System.out.println(isValidPassword("Abc123!@"));
    }
}
