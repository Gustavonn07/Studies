package udemy.java_foundations.section03;

public class ConcatStrings {
    public static void main(String[] args) {
        String txt1 = "Jorge";
        String txt2 = "Felipe";
        u.print(txt1 + txt2);
        u.print(txt1.concat(txt2));

        // Com StringBuilder:
        final String FINAL_STRING = new StringBuilder(txt1.length() + txt2.length())
                .append(txt1)
                .append(txt2)
                .toString();
        u.print(FINAL_STRING);

        // Faz a mesma coisa, porém é mais antigo (menos perfomatico)
        final String OTHER_FINAL_STRING = new StringBuffer(txt1.length() + txt2.length())
                .append(txt1)
                .append(txt2)
                .toString();
    }
}
