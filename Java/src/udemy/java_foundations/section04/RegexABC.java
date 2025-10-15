package udemy.java_foundations.section04;

public class RegexABC {
    public static void main(String[] args) {
        // Vai ver se a palavra tem c, C ou b usando [(chars aceitaveis)]
        System.out.println("bat".matches("[cCb]at"));

        // Verificando se a primeira letra está no alfabeto comum
        System.out.println("Batatinha".matches("[A-Za-z]atatinha"));

        // Proibindo uma letra em específico usando ^
        System.out.println("Gustavo".matches("[^G]ustavo"));

        // Ao usar \ precisa ser \\ se não o codigo não aceita.
        // Deve aceitar qualquer ‘string’ que possua depois do char (word) selecionado (\\w) o mesmos chars
        System.out.println("Lat".matches("\\w\\w\\w"));
        System.out.println("Latw".matches("\\wa\\ww"));

        // A mesma lógica para dígitos (números) use \\d
        System.out.println("23abc".matches("\\d3\\wbc"));

        // Para selecionar certos digitos / textos em tamanho podemos usar {n}:
        // \\s eh para whitespace
        // Podemos pôr o min e max {min, max}
        System.out.println("Gustavo-0707".matches("\\w{7}-\\d{4}"));
        System.out.println("Gustavo-0707".matches("[A-Za-z\\s]{7}-\\d{4}"));
        System.out.println("Gustavo-0707070707".matches("\\w{7}-\\d{4,10}"));

        // Para selecionar tamanho indefinido pode usar *:
        System.out.println("TesteDeRegex 0123 . Batata".matches("\\w*\\s\\d*\\s[-.,\\s]\\s\\w*"));

        // O elemento antes do ? é opcional (pode aparecer 0 ou 1 vez).
        System.out.println("Colour".matches("Colou?r"));
        System.out.println("Color".matches("Colou?r"));

        // O elemento antes do + deve aparecer pelo menos uma vez (1, 2, 3... infinitas).
        System.out.println("batttttttttata".matches("bat+ata"));
    }
}
