package com.gustavo.exercises.DaysOfTheWeek;

import java.util.Random;

public class Main {
    public static void main(String[] args) {
        DaysOfTheWeek[] days = DaysOfTheWeek.values();
//
//        for (int i = 0; i < days.length; i++) {
//            String value = days[i].getValue();
//            if(i % 2 == 0) {
//                char modifiedLetter = Character.toUpperCase(value.charAt(0));
//                value = modifiedLetter + value.substring(1);
//            } else {
//                char modifiedLetter = Character.toUpperCase(value.charAt(value.length() / 2));
//                value = value.substring(0, value.length() / 2) + modifiedLetter + value.substring((value.length() / 2) + 1);
//            }
//            System.out.println(value);
//        }

        Random random = new Random();

        for (int i = 0; i < 9; i++) {
            System.out.println(days[random.nextInt(0, 7)].getCapitalizedValue());
        }
    }
}
