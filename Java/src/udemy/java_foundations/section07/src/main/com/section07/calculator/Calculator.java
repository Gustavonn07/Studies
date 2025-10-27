package com.section07.calculator;

import java.math.BigDecimal;
import java.text.NumberFormat;
import java.util.Locale;

public class Calculator {

    public long add(int num1, int num2) {
        return (long) num1 + num2;
    }

    public double add(double num1, double num2) {
        return num1 + num2;
    }

    public String calculateAnnuity(String R, int t, String r, int n) {
        BigDecimal a = new BigDecimal(r).divide(new BigDecimal(n));
        BigDecimal b = BigDecimal.ONE.add(a);
        BigDecimal c = b.pow(n * t);
        BigDecimal d = c.subtract(BigDecimal.ONE);
        BigDecimal e = d.divide(a);
        BigDecimal result = e.multiply(new BigDecimal(R));
//        NumberFormat currencyInstance = NumberFormat.getCurrencyInstance(Locale.US);
        NumberFormat currencyInstance = NumberFormat.getCurrencyInstance();

        return currencyInstance.format(result);
    }
}
