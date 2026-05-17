package org.example.database;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {
    private static final String URL = "jdbc:postgresql://localhost:5433/ex02_webdev";
    private static final String USER = "postgres";
    private static final String PASSWORD = "123456";

    public static Connection getConnection() throws SQLException {
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException e) {
            throw new RuntimeException("Driver não encontrado", e);
        }
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}
