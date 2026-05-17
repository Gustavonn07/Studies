package ufc.poo2025_2.CrudPotato;

import java.util.ArrayList;
import java.util.List;

public class BatataRepository {

    private static List<Batata> batatas = new ArrayList<>();
    private static int proximoId = 1;

    // CREATE
    public static Batata criar(String tipo, double peso) {
        Batata batata = new Batata(proximoId++, tipo, peso);
        batatas.add(batata);
        return batata;
    }

    // READ
    public static Batata buscarPorId(int id) {
        for (Batata b : batatas) {
            if (b.getId() == id) {
                return b;
            }
        }
        return null;
    }

    // UPDATE
    public static boolean atualizar(int id, String novoTipo, double novoPeso) {
        Batata batata = buscarPorId(id);
        if (batata != null) {
            batata.setTipo(novoTipo);
            batata.setPeso(novoPeso);
            return true;
        }
        return false;
    }

    // DELETE
    public static boolean excluir(int id) {
        Batata batata = buscarPorId(id);
        if (batata != null) {
            batatas.remove(batata);
            return true;
        }
        return false;
    }

    // LISTAR
    public static void listar() {
        for (Batata b : batatas) {
            System.out.println(b);
        }
    }
}

