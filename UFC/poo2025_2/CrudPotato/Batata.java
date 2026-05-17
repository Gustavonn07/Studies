package ufc.poo2025_2.CrudPotato;

public class Batata {

    private int id;
    private String tipo;
    private double peso;

    public Batata(int id, String tipo, double peso) {
        this.id = id;
        this.tipo = tipo;
        this.peso = peso;
    }

    public int getId() {
        return id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        if (peso > 0) {
            this.peso = peso;
        }
    }

    @Override
    public String toString() {
        return "Batata { id=" + id + ", tipo='" + tipo + "', peso=" + peso + " }";
    }
}

