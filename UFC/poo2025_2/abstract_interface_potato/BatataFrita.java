package ufc.poo2025_2.abstract_interface_potato;

public class BatataFrita extends Batata {

    public BatataFrita(double preco) {
        super("Batata Frita", preco);
    }

    @Override
    public void preparar() {
        System.out.println("Fritando a batata em óleo quente...");
    }
}

