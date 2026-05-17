package ufc.poo2025_2.interfaces;

public class Disciplina {

    private static final String DEFAULT_PROFESSOR = "Leonardo";
    private String professor = DEFAULT_PROFESSOR;

    public String getProfessor() {
        return professor;
    }

    public void setProfessor(String professor) {
        if(professor != null) this.professor = professor;
    }

    public void print() {
        System.out.println("Professor: " + this.getProfessor());
    }
}
