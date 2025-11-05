package com.gustavo.employees;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public abstract class Employee implements IEmployee {
    protected final Matcher peopleMat;
    protected String firstName;
    protected String lastName;
    protected LocalDate dob;
    private static final String PEOPLE_REGEX = "(?<lastName>\\w+),\\s*(?<firstName>\\w+),\\s*(?<dob>\\d{1,2}/\\d{1,2}/\\d{4}),\\s*(?<role>\\w+)(?:,\\s*\\{(?<details>.*)\\})?\\n";
    public static final Pattern PERSON_PAT = Pattern.compile(Employee.PEOPLE_REGEX);
    protected final DateTimeFormatter dtFormatter = DateTimeFormatter.ofPattern("M/d/yyyy");

    protected Employee() {
        peopleMat = null;
    }

    public Employee(String personText) {
        peopleMat = Employee.PERSON_PAT.matcher(personText);
        if(peopleMat.find()) {
            this.firstName = peopleMat.group("firstName");
            this.lastName = peopleMat.group("lastName");
            this.dob = LocalDate.from(dtFormatter.parse(peopleMat.group("dob")));
        }
    }

    private static final class TraineeEmployee extends Employee {
        private TraineeEmployee() {}

        @Override
        public int getSalary() {
            return 0;
        }
    }

    public static IEmployee createEmployee(String employeeText) {
        Matcher peopleMat = Employee.PERSON_PAT.matcher(employeeText);

        if(peopleMat.find()) {
            return switch (peopleMat.group("role")) {
                case "Programmer" -> new Programmer(peopleMat.group());
                case "Manager" -> new Manager(peopleMat.group());
                case "Analyst" -> new Analyst(peopleMat.group());
                case "CEO" -> new CEO(peopleMat.group());
                default -> () -> 0;
            };
        }
        return new TraineeEmployee();
    }

    public abstract int getSalary();

    public double getBonus() {
        return getSalary() * 1.10;
    }
}
