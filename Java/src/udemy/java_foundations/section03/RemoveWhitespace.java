package udemy.java_foundations.section03;

public class RemoveWhitespace {
    public static void main(String[] args) {
        String name = "   Fellipe  ";
        // Inicio e fim
        System.out.format("'%s' / ", name.strip());
        // Inicio
        System.out.format("'%s' / ", name.stripLeading());
        // Fim
        System.out.format("'%s' / ", name.stripTrailing());
        String block = """
                
                first line
                      second line
                   third line
                """;
        // Identar blocos de texto
        System.out.format("'%s' / ", block.stripIndent());
        // Versão antiga de strip
        System.out.format("'%s' / ", name.trim());
    }
}
