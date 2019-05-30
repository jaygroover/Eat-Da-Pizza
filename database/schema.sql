DROP DATABASE IF EXISTS pizzas_db;
CREATE DATABASE  pizzas_db;
USE pizzas_db;


CREATE TABLE pizzas (
id int NOT NULL AUTO_INCREMENT,
pizza_name varchar(255) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);