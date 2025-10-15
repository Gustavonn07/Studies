package udemy.java_foundations.section05;

import java.security.SecureRandom;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.ParseException;
import java.util.Locale;
import java.util.Random;

public class MathInJava {

    /**
    * This method calculates the area of a circle
    * @param radius
    * @return
     */
    public static double calcAreaOfCircle(double radius) {
        return Math.PI * Math.pow(radius, 2);
    }

    public static void main(String[] args) throws ParseException {
        // Em java de maneira natural ele ignora divisões que possuem decimais como resposta (exclui o decimal)
        System.out.println(7 / 4);
        // Para recuperar o valor de verdade com decimal é importante transformar em float ou decimal)
        System.out.println(7f / 4);
        System.out.println(7.0 / 4);
        // Pode recuperar colocando (double)operação
        System.out.println((double)7/4);

        System.out.println(Math.abs(-5));
        System.out.println(Math.ceil(5.1321));
        System.out.println(Math.floor(5.1321));
        System.out.println(Math.min(3, 9));
        System.out.println(Math.pow(3, 9));

        System.out.println(Math.random());
        System.out.println((int)(Math.random() * 10));

        Random random = new Random();
        System.out.println(random.nextInt());

        SecureRandom secureRandom = new SecureRandom();
        System.out.println(secureRandom.nextInt());

        System.out.println(calcAreaOfCircle(20));

        NumberFormat moneyFormatter = NumberFormat.getCurrencyInstance();
        System.out.println(moneyFormatter.format(2222324));
        System.out.println(moneyFormatter.parse(moneyFormatter.format(2222324)).toString());

        DecimalFormat df = new DecimalFormat("@#.##baba");
        System.out.println(df.format(1.2233));
    }
}
