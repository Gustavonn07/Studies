package udemy.java_foundations.section02.exercices;

import java.util.Arrays;

public class DaysOfWeek {
    String[] daysOfWeekArray = new String[7];

    public void append(String day) {
        for(int i = 0; i < daysOfWeekArray.length; i++) {
            if(daysOfWeekArray[i] == null) {
                this.daysOfWeekArray[i] = day;
                break;
            }
        }
    }

    public String getDaysOfWeek(int... pos) {
        if(pos.length > 0) {
            if(pos[0] > daysOfWeekArray.length) {
                return null;
            }
            return daysOfWeekArray[pos[0]];
        }
        return Arrays.toString(daysOfWeekArray);
    }

    public int getLength() {
        return daysOfWeekArray.length;
    }

    public static void main(String[] args) {
        DaysOfWeek daysOfWeek = new DaysOfWeek();
        daysOfWeek.append("Domingo");
        daysOfWeek.append("Segunda");
        daysOfWeek.append("Terça");
        daysOfWeek.append("Quarta");
        daysOfWeek.append("Quinta");
        daysOfWeek.append("Sexta");
        daysOfWeek.append("Sabado");

        System.out.println(daysOfWeek.getLength());
        System.out.println(daysOfWeek.getDaysOfWeek(3));
    }
}
