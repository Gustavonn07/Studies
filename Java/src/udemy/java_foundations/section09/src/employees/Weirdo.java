package employees;

import java.time.LocalDate;

public record Weirdo(String firstname, String lastName, LocalDate dob) {
    public Weirdo(String firstname, String lastName) {
        this(firstname, lastName, LocalDate.of(1, 1, 2005));
    }
}
