package udemy.java_foundations.section04;

public class RegexABC2 {
    public static void main(String[] args) {
        // O . significa qualquer char existente
        System.out.println("doggy".matches("....."));

        // Quando estão fora de colchetes, eles são âncoras de posição, não caracteres literais.
        //^ → significa início da ‘string’
        //$ → significa fim da ‘string’
        System.out.println("doggy".matches("^.....$"));

        // \\b posição entre caractéres de palavra e não de palavra (ou começo/fim da ‘string’).
        // Usado para achar palavras inteiras, evitando “falsos positivos” dentro de palavras maiores
        System.out.println("cachorro gato cachorroquente".matches("\\bcachorro\\b gato cachorroquente"));

        System.out.println("123".matches("\\d+"));  // true (só dígitos)
        System.out.println("abc".matches("\\d+"));  // false
        System.out.println("abc".matches("\\D+"));  // true (nenhum dígito)
        System.out.println("a1c".matches("\\D+"));  // false (tem dígito no meio)

        System.out.println("batata123_".matches("\\w+"));  // true
        System.out.println("batata!".matches("\\w+"));     // false (! não faz parte de \w)
        System.out.println("!!!".matches("\\W+"));         // true (só não palavras)
    }
}
