package com.gustavo.exercises.DaysOfTheWeek;

public enum DaysOfTheWeek {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY;

    public String getCapitalizedValue() {
        String dayOfTheWeekdayString = this.toString().toLowerCase();
        char firstLetter = Character.toUpperCase(dayOfTheWeekdayString.charAt(0));
        return firstLetter + dayOfTheWeekdayString.substring(1);
    }

    public String getValue() {
        return this.toString().toLowerCase();
    }

    public String getPhrase() {
        return switch (this) {
            case SUNDAY -> "We eat pot roast on Sunday";
            case MONDAY -> "We eat spaghetti on Monday";
            case TUESDAY -> "We eat tacos on Tuesday";
            case WEDNESDAY -> "We eat chicken on Wednesday";
            case THURSDAY -> "We eat meatloaf on Thursday";
            case FRIDAY -> "We eat hamburgers on Friday";
            case SATURDAY -> "We eat pizza on Saturday";
            default -> "";
        };
    }
}
