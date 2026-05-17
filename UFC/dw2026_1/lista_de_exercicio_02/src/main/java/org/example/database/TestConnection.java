package org.example.database;

import java.sql.Connection;
import java.sql.SQLException;

public class TestConnection {
    public static void main(String[] args) {
        try {
            Connection conn = ConnectionFactory.getConnection();
            System.out.println("Conectado com sucesso!");
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
