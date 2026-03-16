package ufc.poo2025_2.abstract_interface_potato;

public abstract class Batata implements Preparavel {

    protected String nome;
    protected double preco;

    public Batata(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public void mostrarInfo() {
        System.out.println("Batata: " + nome);
        System.out.println("Preço: R$ " + preco);
    }
}


