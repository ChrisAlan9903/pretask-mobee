-- This file contains the SQL commands to create the database schema for the development environment.
-- DB: PostgreSQL




-- Cars Table
CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    brand VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    variant VARCHAR(255) NOT NULL,
    manufacture_year INTEGER NOT NULL,
    transmission VARCHAR(255) NOT NULL
);

