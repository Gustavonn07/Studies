package ufc.poo2025_2.CrudPotato;

public class Main {

    public static void main(String[] args) {

        BatataRepository.criar("Batata Inglesa", 1.2);
        BatataRepository.criar("Batata Doce", 0.8);

        System.out.println("Batatas cadastradas:");
        BatataRepository.listar();

        System.out.println("\nAtualizando batata ID 1...");
        BatataRepository.atualizar(1, "Batata Inglesa Premium", 1.5);

        System.out.println("\nApós atualização:");
        BatataRepository.listar();

        System.out.println("\nExcluindo batata ID 2...");
        BatataRepository.excluir(2);

        System.out.println("\nApós exclusão:");
        BatataRepository.listar();
    }
}

