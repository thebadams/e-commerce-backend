# E-Commerce Backend

## Description
This is a backend, built using sequelize and mysql to create a database of e-commerce information. There are three main tables used to hold information: Category, Product, and Tag. Category is referred to on the Product table via a 'category_id' foreign key that references the primary key of the category row. Product and Tag are related to one another through an intersecting table, ProductTag, which holds foreign keys referencing the primary key of the Product and the Tag.

## Usage

### Installation
To Install the application, run the command <code>npm install</code> in the command line in the root directory of the project. This will install the necessary npm packages.

Next, create a database by running <code>create database ecommerce_db</code> in your mysql server.

Create a .env file using the .env.EXAMPLE found in the root directory as a template.

From the command line, run the script <code>npm run seed</code> to seed the data.

After this all set up of the applcation should be complete.

### Usage
To use the application, you should run <code>npm start</code> to start up the server.

Once the server has been started, you can use the following endpoints to SELECT, CREATE, UPDATE, AND DELETE the different rows from your API Client of choice.

1. "/api/categories/" and "/api/categories/:id": For category queries.
1. "/api/products/" and "/api/products/:id" for product queries.
1. "/api/tags/" and "/api/tags/:id" for tag queries.

Please see functionality below:

![Demo](./Assets/E-Commerce-Backend.gif)