package employees;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Analyst extends Employee {
    public int projectCount = 0;

    private final String analystReg = "\\w+=(?<projectCount>\\w+)";
    private final Pattern analystPat = Pattern.compile(analystReg);

    public Analyst(String personText) {
        super(personText);
        Matcher analystMat = analystPat.matcher(peopleMat.group("details"));
        if(analystMat.find()) {
            this.projectCount = Integer.parseInt(analystMat.group("projectCount"));
        }
    }

    public int getSalary() {
        return 2500 + this.projectCount * 2;
    }
}
