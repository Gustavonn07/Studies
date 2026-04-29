package org.example;

import org.example.entities.product.Product;
import org.example.entities.product.ProductDAO;

import java.math.BigDecimal;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        ProductDAO dao = new ProductDAO();

        // =========================
        // 1. CRIAR UM NOVO PRODUTO
        // =========================

        boolean inserted = dao.postNewProduct(
                "Notebook Dell",
                new BigDecimal("3000.00"),
                "notebook1.png",
                "Azul",
                2);
        System.out.println("Insert: " + inserted);


        // =========================
        // 2. LISTAR TODOS OS PRODUTOS
        // =========================
        List<Product> products = dao.getProductList();
        System.out.println("\nLista de produtos:");

        for (Product p : products) {
            System.out.println(p);
        }

        if (products.isEmpty()) {
            System.out.println("Nenhum produto encontrado. Encerrando testes.");
            return;
        }


        // =========================
        // 3. PEGAR UM ID VÁLIDO
        // =========================
        int id = products.get(products.size() - 1).getId();
        System.out.println("\nUsando ID: " + id);


        // =========================
        // 4. PEGAR PRODUTO PELO ID
        // =========================
        Product found = dao.getProductById(id);
        System.out.println("\nProduto encontrado:");
        System.out.println(found);


        // =========================
        // 5. UPDATE
        // =========================
        boolean updated = dao.updateProduct(
                id,
                "Notebook Dell Atualizado",
                new BigDecimal("4000.00"),
                "notebook2.png",
                "Prata",
                5
        );

        System.out.println("\nUpdate: " + updated);

        Product updatedProduct = dao.getProductById(id);
        System.out.println("Após update:");
        System.out.println(updatedProduct);


        // =========================
        // 6. DELETE
        // =========================
        boolean deleted = dao.deleteProduct(id);
        System.out.println("\nDelete: " + deleted);

        Product afterDelete = dao.getProductById(id);
        System.out.println("Após delete:");
        System.out.println(afterDelete == null ? "Produto não encontrado" : afterDelete);
    }
}