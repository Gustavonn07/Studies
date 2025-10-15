package udemy.java_foundations.section05;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;

public class BigDecimalInJava {
    // guardam internamente os números como objetos compostos, em vez de bits fixos (como int, long, etc).
    public static void main(String[] args) {
        BigDecimal bigDecimal1 = new BigDecimal("2313123");
        BigDecimal bigDecimal2 = new BigDecimal("2");
        System.out.println(bigDecimal1.add(bigDecimal2));

        // O MathContext é uma classe auxiliar usada pelo BigDecimal para determinar como os cálculos devem ser feitos.
        MathContext mc = new MathContext(10, RoundingMode.HALF_UP);
        BigDecimal resultado = new BigDecimal("100").divide(new BigDecimal("3"), mc);

        System.out.println(resultado);
    }
}
