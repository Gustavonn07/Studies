package udemy.java_foundations.section04;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class TranscriptParser {
    public static void main(String[] args) {
        String transcript = """
                Student Number:	1234598872			Grade:		11
                Birthdate:		01/02/2000			Gender:	M
                State ID:		8923827123
                
                Cumulative GPA (Weighted)		3.82
                Cumulative GPA (Unweighted)	3.46
                """;

        String regex = """
        # Coleta de número de estudante:
        Student\\sNumber:\\s+(?<StudentNumber>\\d+)\\s+
        # Coleta de Ano do estudante:
        Grade:\\s+(?<Grade>\\d{1,2})\\b\\s+
        # Coleta de data de nascimento do estudante:
        Birthdate:\\s+(?<Birthdate>\\d{2}/\\d{2}/\\d{4})\\s+
        # Coleta de Gênero do estudante:
        Gender:\\s+(?<Gender>\\w+)\\b\\s+
        # Coleta de identificador do estado do estudante:
        State\\sID:\\s+(?<StateID>\\d+)\\b\\s+
        # Coleta de GPA pesado:
        Cumulative\\sGPA\\s\\(Weighted\\)\\s+(?<GPAW>[\\d\\.]+)\\b\\s+
        # Coleta de GPA pesado:
        Cumulative\\sGPA\\s\\(Unweighted\\)\\s+(?<GPAUW>[\\d\\.]+)\\b.*
        """;

        Pattern pat = Pattern.compile(regex, Pattern.DOTALL | Pattern.COMMENTS);
        Matcher mat = pat.matcher(transcript);
        if(mat.matches()) {
            System.out.println(mat.group("StudentNumber"));
            System.out.println(mat.group("Grade"));
            System.out.println(mat.group("Birthdate"));
            System.out.println(mat.group("Gender"));
            System.out.println(mat.group("StateID"));
            System.out.println(mat.group("GPAW"));
            System.out.println(mat.group("GPAUW"));
        }
    }
}
