package udemy.java_foundations.section03;

public class Split {
    public static void main(String[] args) {
        String firstString = "Nogueira, Gustavo, 07/07/2005, 20, Peralta";
        String[] arrayFirstString = firstString.split(",");
        u.print(arrayFirstString.length);
    }
}
