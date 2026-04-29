package org.example.entities.product;

import org.example.database.ConnectionFactory;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ProductDAO {

    public List<Product> getProductList() {
        List<Product> products = new ArrayList<Product>();

        try(Connection conn = ConnectionFactory.getConnection();
            PreparedStatement statement = conn.prepareStatement("SELECT * FROM produto");
            ResultSet resultSet = statement.executeQuery();
        ) {
            while (resultSet.next()) {
                Product p = new Product();

                p.setId(resultSet.getInt("id"));
                p.setDescription(resultSet.getString("descricao"));
                p.setPrice(resultSet.getBigDecimal("preco"));
                p.setPicture(resultSet.getString("foto"));
                p.setColor(resultSet.getString("cor"));
                p.setQuantity(resultSet.getInt("quantidade"));

                products.add(p);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return products;
    }

    public Product getProductById(int id) {
        Product product = null;

        try(Connection conn = ConnectionFactory.getConnection();
            PreparedStatement statement = conn.prepareStatement("SELECT * FROM produto WHERE id = ?")) {

            statement.setInt(1, id);

            try (ResultSet resultSet = statement.executeQuery()) {

                if (resultSet.next()) {
                    product = new Product();

                    product.setId(resultSet.getInt("id"));
                    product.setDescription(resultSet.getString("descricao"));
                    product.setPrice(resultSet.getBigDecimal("preco"));
                    product.setPicture(resultSet.getString("foto"));
                    product.setColor(resultSet.getString("cor"));
                    product.setQuantity(resultSet.getInt("quantidade"));
                }

            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return product;
    }

    public boolean postNewProduct(
            String description,
            BigDecimal price,
            String picture,
            String color,
            int quantity
    ) {
        boolean success;

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement statement = conn.prepareStatement(
                     "INSERT INTO produto (descricao, preco, foto, cor, quantidade) VALUES (?, ?, ?, ?, ?)"
             )) {

            statement.setString(1, description);
            statement.setBigDecimal(2, price);
            statement.setString(3, picture);
            statement.setString(4, color);
            statement.setInt(5, quantity);

            success = (statement.executeUpdate() == 1);

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return success;
    }

    public boolean updateProduct(
            int id,
            String description,
            BigDecimal price,
            String picture,
            String color,
            int quantity
    ) {
        boolean success;

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement statement = conn.prepareStatement(
                     "UPDATE produto SET descricao = ?, preco = ?, foto = ?, cor = ?, quantidade = ? WHERE id = ?"
             )) {

            statement.setString(1, description);
            statement.setBigDecimal(2, price);
            statement.setString(3, picture);
            statement.setString(4, color);
            statement.setInt(5, quantity);
            statement.setInt(6, id);

            success = (statement.executeUpdate() == 1);

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return success;
    }

    public boolean deleteProduct(int id) {
        boolean success;

        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement statement = conn.prepareStatement(
                     "DELETE FROM produto WHERE id = ?"
             )) {

            statement.setInt(1, id);

            success = (statement.executeUpdate() == 1);

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return success;
    }
}
