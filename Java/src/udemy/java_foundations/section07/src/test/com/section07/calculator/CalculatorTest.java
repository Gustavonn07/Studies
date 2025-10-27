package com.section07.calculator;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {
    private final Calculator calculator = new Calculator();

    //    @BeforeEach
    //    void setUp() {
    //        calculator = new Calculator();
    //    }

    @Test
    public void canAddZeroPlusZero() {
        long sum = calculator.add(0, 0);
        assertEquals(0, sum, "Was expecting sum of 0");
    }

    @Test
    public void canAddIntegersValues() {
        long sum = calculator.add(2, 5);
        assertEquals(7, sum, "Was expecting sum of 2 integers");
    }

    @Test
    public void canAddDoubleValues() {
        double sum = calculator.add(2.5, 5.1);
        assertEquals(7.6, sum, "Was expecting sum of 2 doubles");
    }

    @Test
    @Disabled
    public void canAddNegativeValues() {
        long sum = calculator.add(-1, -5);
        assertEquals(-6, sum, "Was expecting sum of 2 negative numbers");
    }

    @Test
    public void canAddMaxIntPlusOne() {
        long sum = calculator.add(Integer.MAX_VALUE, 1);
        assertEquals(Integer.MAX_VALUE + 1L, sum);
    }

    @Test
    public void canCalculateAnnuity() {
        String value = calculator.calculateAnnuity("22000", 7, ".06", 1);
        assertEquals("R$ 184.664,43", value);
    }

    @Test
    public void canCalculateAnnuity2() {
        String value = calculator.calculateAnnuity("1200", 10, ".08", 4);
        assertEquals("R$ 72.482,38", value);
    }
}
