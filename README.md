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

## Contributing

To contribute to the project, feel free to contact me via my github profile [here](https://www.github.com/thabadams) or at my email [here](mailto:bpeteradams@gmail.com)

## License

MIT License

Copyright (c) 2021 Brian P. Adams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
