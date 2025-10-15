package udemy.java_foundations.section05;

public class BitsAndBytes {
    public static void main(String[] args) {

        //  Bit é a menor unidade de informação.
        //  Pode ter apenas dois valores: 0 ou 1.
        //  Byte é um conjunto de 8 bits.
        //  Exemplo: 1 byte = 8 bits = 01001101

        //  Em Java, o tipo primitivo byte armazena exatamente 8 bits, ou seja, 1 byte de informação.

        //  byte valor = 10; ocupa 8 bits na memória

        //  Um byte em Java pode representar valores de -128 a 127 (pois o primeiro bit é usado para o sinal).

        // Para por num em hexadecimal coloque 0x
        byte hexadecimalNumber = 0x20;
        // Para por num em binário coloque 0b
        short binNumber = 0b010010;

        System.out.println(hexadecimalNumber);
        System.out.println(binNumber);
    }
}
